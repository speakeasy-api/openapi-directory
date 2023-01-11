package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDocumentClassificationJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentClassificationJobPropertiesList")
    public DocumentClassificationJobProperties[] documentClassificationJobPropertiesList;
    public ListDocumentClassificationJobsResponse withDocumentClassificationJobPropertiesList(DocumentClassificationJobProperties[] documentClassificationJobPropertiesList) {
        this.documentClassificationJobPropertiesList = documentClassificationJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDocumentClassificationJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}