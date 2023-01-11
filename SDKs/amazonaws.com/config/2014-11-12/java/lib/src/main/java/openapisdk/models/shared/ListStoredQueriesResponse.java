package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStoredQueriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListStoredQueriesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StoredQueryMetadata")
    public StoredQueryMetadata[] storedQueryMetadata;
    public ListStoredQueriesResponse withStoredQueryMetadata(StoredQueryMetadata[] storedQueryMetadata) {
        this.storedQueryMetadata = storedQueryMetadata;
        return this;
    }
}