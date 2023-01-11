package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateWorkspaceImagePermissionRequest {
    @JsonProperty("AllowCopyImage")
    public Boolean allowCopyImage;
    public UpdateWorkspaceImagePermissionRequest withAllowCopyImage(Boolean allowCopyImage) {
        this.allowCopyImage = allowCopyImage;
        return this;
    }
    @JsonProperty("ImageId")
    public String imageId;
    public UpdateWorkspaceImagePermissionRequest withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonProperty("SharedAccountId")
    public String sharedAccountId;
    public UpdateWorkspaceImagePermissionRequest withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
}