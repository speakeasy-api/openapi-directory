package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOperationsResponse
 * The ListOperations response includes the following elements.
**/
public class ListOperationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageMarker")
    public String nextPageMarker;
    public ListOperationsResponse withNextPageMarker(String nextPageMarker) {
        this.nextPageMarker = nextPageMarker;
        return this;
    }
    @JsonProperty("Operations")
    public OperationSummary[] operations;
    public ListOperationsResponse withOperations(OperationSummary[] operations) {
        this.operations = operations;
        return this;
    }
}