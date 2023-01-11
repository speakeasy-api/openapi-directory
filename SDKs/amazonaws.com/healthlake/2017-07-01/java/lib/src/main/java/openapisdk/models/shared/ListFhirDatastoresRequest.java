package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFhirDatastoresRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public DatastoreFilter filter;
    public ListFhirDatastoresRequest withFilter(DatastoreFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListFhirDatastoresRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFhirDatastoresRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}