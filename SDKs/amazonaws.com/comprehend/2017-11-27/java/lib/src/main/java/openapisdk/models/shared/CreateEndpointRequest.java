package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEndpointRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateEndpointRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public CreateEndpointRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("DesiredInferenceUnits")
    public Long desiredInferenceUnits;
    public CreateEndpointRequest withDesiredInferenceUnits(Long desiredInferenceUnits) {
        this.desiredInferenceUnits = desiredInferenceUnits;
        return this;
    }
    @JsonProperty("EndpointName")
    public String endpointName;
    public CreateEndpointRequest withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    @JsonProperty("ModelArn")
    public String modelArn;
    public CreateEndpointRequest withModelArn(String modelArn) {
        this.modelArn = modelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateEndpointRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}