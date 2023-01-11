package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDataflowEndpointGroupResponse
 * <p/>
**/
public class GetDataflowEndpointGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointGroupArn")
    public String dataflowEndpointGroupArn;
    public GetDataflowEndpointGroupResponse withDataflowEndpointGroupArn(String dataflowEndpointGroupArn) {
        this.dataflowEndpointGroupArn = dataflowEndpointGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointGroupId")
    public String dataflowEndpointGroupId;
    public GetDataflowEndpointGroupResponse withDataflowEndpointGroupId(String dataflowEndpointGroupId) {
        this.dataflowEndpointGroupId = dataflowEndpointGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointsDetails")
    public EndpointDetails[] endpointsDetails;
    public GetDataflowEndpointGroupResponse withEndpointsDetails(EndpointDetails[] endpointsDetails) {
        this.endpointsDetails = endpointsDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public GetDataflowEndpointGroupResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}