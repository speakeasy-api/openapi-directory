package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRaidArraysRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public DescribeRaidArraysRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RaidArrayIds")
    public String[] raidArrayIds;
    public DescribeRaidArraysRequest withRaidArrayIds(String[] raidArrayIds) {
        this.raidArrayIds = raidArrayIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeRaidArraysRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}