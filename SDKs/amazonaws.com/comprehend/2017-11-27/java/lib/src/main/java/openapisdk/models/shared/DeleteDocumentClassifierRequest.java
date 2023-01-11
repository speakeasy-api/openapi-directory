package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDocumentClassifierRequest {
    @JsonProperty("DocumentClassifierArn")
    public String documentClassifierArn;
    public DeleteDocumentClassifierRequest withDocumentClassifierArn(String documentClassifierArn) {
        this.documentClassifierArn = documentClassifierArn;
        return this;
    }
}