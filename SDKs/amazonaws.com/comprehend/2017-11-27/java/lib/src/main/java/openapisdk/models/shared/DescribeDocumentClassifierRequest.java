package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDocumentClassifierRequest {
    @JsonProperty("DocumentClassifierArn")
    public String documentClassifierArn;
    public DescribeDocumentClassifierRequest withDocumentClassifierArn(String documentClassifierArn) {
        this.documentClassifierArn = documentClassifierArn;
        return this;
    }
}