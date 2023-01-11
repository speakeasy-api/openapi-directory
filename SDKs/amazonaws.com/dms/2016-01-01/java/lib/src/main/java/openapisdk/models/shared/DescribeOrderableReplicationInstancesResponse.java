package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeOrderableReplicationInstancesResponse
 * <p/>
**/
public class DescribeOrderableReplicationInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeOrderableReplicationInstancesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderableReplicationInstances")
    public OrderableReplicationInstance[] orderableReplicationInstances;
    public DescribeOrderableReplicationInstancesResponse withOrderableReplicationInstances(OrderableReplicationInstance[] orderableReplicationInstances) {
        this.orderableReplicationInstances = orderableReplicationInstances;
        return this;
    }
}