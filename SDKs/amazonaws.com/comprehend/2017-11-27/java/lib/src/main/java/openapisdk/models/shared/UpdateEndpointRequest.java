package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEndpointRequest {
    @JsonProperty("DesiredInferenceUnits")
    public Long desiredInferenceUnits;
    public UpdateEndpointRequest withDesiredInferenceUnits(Long desiredInferenceUnits) {
        this.desiredInferenceUnits = desiredInferenceUnits;
        return this;
    }
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public UpdateEndpointRequest withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
}