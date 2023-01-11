package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAutoSnapshotsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSnapshots")
    public AutoSnapshotDetails[] autoSnapshots;
    public GetAutoSnapshotsResult withAutoSnapshots(AutoSnapshotDetails[] autoSnapshots) {
        this.autoSnapshots = autoSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public GetAutoSnapshotsResult withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public GetAutoSnapshotsResult withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}