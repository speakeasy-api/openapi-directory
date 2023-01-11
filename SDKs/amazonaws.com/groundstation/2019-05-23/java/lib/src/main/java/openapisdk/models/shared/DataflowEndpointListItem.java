package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataflowEndpointListItem
 * Item in a list of <code>DataflowEndpoint</code> groups.
**/
public class DataflowEndpointListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointGroupArn")
    public String dataflowEndpointGroupArn;
    public DataflowEndpointListItem withDataflowEndpointGroupArn(String dataflowEndpointGroupArn) {
        this.dataflowEndpointGroupArn = dataflowEndpointGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointGroupId")
    public String dataflowEndpointGroupId;
    public DataflowEndpointListItem withDataflowEndpointGroupId(String dataflowEndpointGroupId) {
        this.dataflowEndpointGroupId = dataflowEndpointGroupId;
        return this;
    }
}