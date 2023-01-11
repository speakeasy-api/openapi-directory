package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFunctionConcurrencyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReservedConcurrentExecutions")
    public Long reservedConcurrentExecutions;
    public GetFunctionConcurrencyResponse withReservedConcurrentExecutions(Long reservedConcurrentExecutions) {
        this.reservedConcurrentExecutions = reservedConcurrentExecutions;
        return this;
    }
}