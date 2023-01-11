package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDocumentClassifiersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentClassifierPropertiesList")
    public DocumentClassifierProperties[] documentClassifierPropertiesList;
    public ListDocumentClassifiersResponse withDocumentClassifierPropertiesList(DocumentClassifierProperties[] documentClassifierPropertiesList) {
        this.documentClassifierPropertiesList = documentClassifierPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDocumentClassifiersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}