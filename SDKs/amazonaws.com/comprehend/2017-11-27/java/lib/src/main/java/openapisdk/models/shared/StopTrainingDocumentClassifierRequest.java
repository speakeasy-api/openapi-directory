package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopTrainingDocumentClassifierRequest {
    @JsonProperty("DocumentClassifierArn")
    public String documentClassifierArn;
    public StopTrainingDocumentClassifierRequest withDocumentClassifierArn(String documentClassifierArn) {
        this.documentClassifierArn = documentClassifierArn;
        return this;
    }
}