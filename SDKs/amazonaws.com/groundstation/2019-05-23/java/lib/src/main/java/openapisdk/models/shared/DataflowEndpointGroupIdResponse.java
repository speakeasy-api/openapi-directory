package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataflowEndpointGroupIdResponse
 * <p/>
**/
public class DataflowEndpointGroupIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointGroupId")
    public String dataflowEndpointGroupId;
    public DataflowEndpointGroupIdResponse withDataflowEndpointGroupId(String dataflowEndpointGroupId) {
        this.dataflowEndpointGroupId = dataflowEndpointGroupId;
        return this;
    }
}