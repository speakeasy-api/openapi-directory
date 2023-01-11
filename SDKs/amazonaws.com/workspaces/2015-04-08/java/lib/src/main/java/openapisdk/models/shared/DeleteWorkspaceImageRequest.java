package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWorkspaceImageRequest {
    @JsonProperty("ImageId")
    public String imageId;
    public DeleteWorkspaceImageRequest withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
}