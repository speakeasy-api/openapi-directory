package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspaceBundleRequest {
    @JsonProperty("BundleDescription")
    public String bundleDescription;
    public CreateWorkspaceBundleRequest withBundleDescription(String bundleDescription) {
        this.bundleDescription = bundleDescription;
        return this;
    }
    @JsonProperty("BundleName")
    public String bundleName;
    public CreateWorkspaceBundleRequest withBundleName(String bundleName) {
        this.bundleName = bundleName;
        return this;
    }
    @JsonProperty("ComputeType")
    public ComputeType computeType;
    public CreateWorkspaceBundleRequest withComputeType(ComputeType computeType) {
        this.computeType = computeType;
        return this;
    }
    @JsonProperty("ImageId")
    public String imageId;
    public CreateWorkspaceBundleRequest withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootStorage")
    public RootStorage rootStorage;
    public CreateWorkspaceBundleRequest withRootStorage(RootStorage rootStorage) {
        this.rootStorage = rootStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateWorkspaceBundleRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("UserStorage")
    public UserStorage userStorage;
    public CreateWorkspaceBundleRequest withUserStorage(UserStorage userStorage) {
        this.userStorage = userStorage;
        return this;
    }
}