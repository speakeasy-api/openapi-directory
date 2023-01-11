package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspaceBundleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BundleId")
    public String bundleId;
    public UpdateWorkspaceBundleRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public UpdateWorkspaceBundleRequest withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
}