package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifySelfservicePermissionsRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public ModifySelfservicePermissionsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("SelfservicePermissions")
    public SelfservicePermissions selfservicePermissions;
    public ModifySelfservicePermissionsRequest withSelfservicePermissions(SelfservicePermissions selfservicePermissions) {
        this.selfservicePermissions = selfservicePermissions;
        return this;
    }
}