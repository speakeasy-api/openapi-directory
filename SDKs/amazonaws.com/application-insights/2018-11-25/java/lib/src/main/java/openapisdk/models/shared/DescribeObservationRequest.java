package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeObservationRequest {
    @JsonProperty("ObservationId")
    public String observationId;
    public DescribeObservationRequest withObservationId(String observationId) {
        this.observationId = observationId;
        return this;
    }
}