package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFunctionConcurrencyRequestBody {
    @JsonProperty("ReservedConcurrentExecutions")
    public Long reservedConcurrentExecutions;
    public PutFunctionConcurrencyRequestBody withReservedConcurrentExecutions(Long reservedConcurrentExecutions) {
        this.reservedConcurrentExecutions = reservedConcurrentExecutions;
        return this;
    }
}