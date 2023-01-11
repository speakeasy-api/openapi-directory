package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDataflowEndpointGroupRequestBody {
    @JsonProperty("endpointDetails")
    public openapisdk.models.shared.EndpointDetails[] endpointDetails;
    public CreateDataflowEndpointGroupRequestBody withEndpointDetails(openapisdk.models.shared.EndpointDetails[] endpointDetails) {
        this.endpointDetails = endpointDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateDataflowEndpointGroupRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}