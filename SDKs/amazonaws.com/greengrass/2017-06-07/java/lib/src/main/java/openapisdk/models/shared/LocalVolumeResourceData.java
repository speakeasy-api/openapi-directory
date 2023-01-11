package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalVolumeResourceData
 * Attributes that define a local volume resource.
**/
public class LocalVolumeResourceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPath")
    public String destinationPath;
    public LocalVolumeResourceData withDestinationPath(String destinationPath) {
        this.destinationPath = destinationPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupOwnerSetting")
    public GroupOwnerSetting groupOwnerSetting;
    public LocalVolumeResourceData withGroupOwnerSetting(GroupOwnerSetting groupOwnerSetting) {
        this.groupOwnerSetting = groupOwnerSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourcePath")
    public String sourcePath;
    public LocalVolumeResourceData withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
}