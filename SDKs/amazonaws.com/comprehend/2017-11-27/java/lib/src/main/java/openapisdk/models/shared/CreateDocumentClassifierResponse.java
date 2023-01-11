package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDocumentClassifierResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentClassifierArn")
    public String documentClassifierArn;
    public CreateDocumentClassifierResponse withDocumentClassifierArn(String documentClassifierArn) {
        this.documentClassifierArn = documentClassifierArn;
        return this;
    }
}