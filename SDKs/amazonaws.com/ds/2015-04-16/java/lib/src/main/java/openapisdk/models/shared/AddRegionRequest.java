package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddRegionRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public AddRegionRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("RegionName")
    public String regionName;
    public AddRegionRequest withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @JsonProperty("VPCSettings")
    public DirectoryVpcSettings vpcSettings;
    public AddRegionRequest withVpcSettings(DirectoryVpcSettings vpcSettings) {
        this.vpcSettings = vpcSettings;
        return this;
    }
}