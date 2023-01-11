package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Concurrency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReservedConcurrentExecutions")
    public Long reservedConcurrentExecutions;
    public Concurrency withReservedConcurrentExecutions(Long reservedConcurrentExecutions) {
        this.reservedConcurrentExecutions = reservedConcurrentExecutions;
        return this;
    }
}