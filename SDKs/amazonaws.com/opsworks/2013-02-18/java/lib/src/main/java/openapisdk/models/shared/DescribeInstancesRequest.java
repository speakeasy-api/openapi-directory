package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeInstancesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceIds")
    public String[] instanceIds;
    public DescribeInstancesRequest withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerId")
    public String layerId;
    public DescribeInstancesRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeInstancesRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}