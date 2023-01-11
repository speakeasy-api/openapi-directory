package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOperationsForResourceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageCount")
    public java.util.Map<String, Object> nextPageCount;
    public GetOperationsForResourceResult withNextPageCount(java.util.Map<String, Object> nextPageCount) {
        this.nextPageCount = nextPageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetOperationsForResourceResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;
    public GetOperationsForResourceResult withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
}