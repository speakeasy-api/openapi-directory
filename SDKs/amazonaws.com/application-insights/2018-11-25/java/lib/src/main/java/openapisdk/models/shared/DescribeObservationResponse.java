package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeObservationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Observation")
    public Observation observation;
    public DescribeObservationResponse withObservation(Observation observation) {
        this.observation = observation;
        return this;
    }
}