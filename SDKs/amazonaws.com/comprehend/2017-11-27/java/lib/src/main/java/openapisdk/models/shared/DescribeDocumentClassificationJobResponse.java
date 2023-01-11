package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDocumentClassificationJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentClassificationJobProperties")
    public DocumentClassificationJobProperties documentClassificationJobProperties;
    public DescribeDocumentClassificationJobResponse withDocumentClassificationJobProperties(DocumentClassificationJobProperties documentClassificationJobProperties) {
        this.documentClassificationJobProperties = documentClassificationJobProperties;
        return this;
    }
}