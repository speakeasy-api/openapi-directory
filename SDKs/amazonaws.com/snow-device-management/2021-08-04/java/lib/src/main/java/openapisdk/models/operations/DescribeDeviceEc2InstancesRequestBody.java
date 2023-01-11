package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDeviceEc2InstancesRequestBody {
    @JsonProperty("instanceIds")
    public String[] instanceIds;
    public DescribeDeviceEc2InstancesRequestBody withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
}