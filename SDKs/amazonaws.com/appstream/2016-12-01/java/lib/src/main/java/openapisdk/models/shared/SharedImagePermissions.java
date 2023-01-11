package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SharedImagePermissions
 * Describes the permissions that are available to the specified AWS account for a shared image.
**/
public class SharedImagePermissions {
    @JsonProperty("imagePermissions")
    public ImagePermissions imagePermissions;
    public SharedImagePermissions withImagePermissions(ImagePermissions imagePermissions) {
        this.imagePermissions = imagePermissions;
        return this;
    }
    @JsonProperty("sharedAccountId")
    public String sharedAccountId;
    public SharedImagePermissions withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
}