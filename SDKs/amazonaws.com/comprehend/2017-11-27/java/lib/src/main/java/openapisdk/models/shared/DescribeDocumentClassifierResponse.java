package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDocumentClassifierResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentClassifierProperties")
    public DocumentClassifierProperties documentClassifierProperties;
    public DescribeDocumentClassifierResponse withDocumentClassifierProperties(DocumentClassifierProperties documentClassifierProperties) {
        this.documentClassifierProperties = documentClassifierProperties;
        return this;
    }
}