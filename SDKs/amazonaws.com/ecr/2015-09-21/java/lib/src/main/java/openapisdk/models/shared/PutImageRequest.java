package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDigest")
    public String imageDigest;
    public PutImageRequest withImageDigest(String imageDigest) {
        this.imageDigest = imageDigest;
        return this;
    }
    @JsonProperty("imageManifest")
    public String imageManifest;
    public PutImageRequest withImageManifest(String imageManifest) {
        this.imageManifest = imageManifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageManifestMediaType")
    public String imageManifestMediaType;
    public PutImageRequest withImageManifestMediaType(String imageManifestMediaType) {
        this.imageManifestMediaType = imageManifestMediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTag")
    public String imageTag;
    public PutImageRequest withImageTag(String imageTag) {
        this.imageTag = imageTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public PutImageRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PutImageRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}