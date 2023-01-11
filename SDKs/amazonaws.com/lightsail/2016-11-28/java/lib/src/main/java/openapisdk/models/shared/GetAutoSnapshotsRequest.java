package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAutoSnapshotsRequest {
    @JsonProperty("resourceName")
    public String resourceName;
    public GetAutoSnapshotsRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}