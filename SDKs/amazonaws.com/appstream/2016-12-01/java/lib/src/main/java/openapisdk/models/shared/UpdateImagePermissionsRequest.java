package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateImagePermissionsRequest {
    @JsonProperty("ImagePermissions")
    public ImagePermissions imagePermissions;
    public UpdateImagePermissionsRequest withImagePermissions(ImagePermissions imagePermissions) {
        this.imagePermissions = imagePermissions;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateImagePermissionsRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SharedAccountId")
    public String sharedAccountId;
    public UpdateImagePermissionsRequest withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
}