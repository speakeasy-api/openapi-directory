package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalDeviceResourceData
 * Attributes that define a local device resource.
**/
public class LocalDeviceResourceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupOwnerSetting")
    public GroupOwnerSetting groupOwnerSetting;
    public LocalDeviceResourceData withGroupOwnerSetting(GroupOwnerSetting groupOwnerSetting) {
        this.groupOwnerSetting = groupOwnerSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourcePath")
    public String sourcePath;
    public LocalDeviceResourceData withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
}