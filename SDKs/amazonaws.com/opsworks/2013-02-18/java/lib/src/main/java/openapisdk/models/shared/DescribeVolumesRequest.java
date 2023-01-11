package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeVolumesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public DescribeVolumesRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RaidArrayId")
    public String raidArrayId;
    public DescribeVolumesRequest withRaidArrayId(String raidArrayId) {
        this.raidArrayId = raidArrayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeVolumesRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeIds")
    public String[] volumeIds;
    public DescribeVolumesRequest withVolumeIds(String[] volumeIds) {
        this.volumeIds = volumeIds;
        return this;
    }
}