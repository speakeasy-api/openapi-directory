package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceDownloadOwnerSetting
 * The owner setting for downloaded machine learning resources.
**/
public class ResourceDownloadOwnerSetting {
    @JsonProperty("GroupOwner")
    public String groupOwner;
    public ResourceDownloadOwnerSetting withGroupOwner(String groupOwner) {
        this.groupOwner = groupOwner;
        return this;
    }
    @JsonProperty("GroupPermission")
    public PermissionEnum groupPermission;
    public ResourceDownloadOwnerSetting withGroupPermission(PermissionEnum groupPermission) {
        this.groupPermission = groupPermission;
        return this;
    }
}