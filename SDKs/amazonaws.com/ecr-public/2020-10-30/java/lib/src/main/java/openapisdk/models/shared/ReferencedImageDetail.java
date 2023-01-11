package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ReferencedImageDetail
 * An object that describes the image tag details returned by a <a>DescribeImageTags</a> action.
**/
public class ReferencedImageDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactMediaType")
    public String artifactMediaType;
    public ReferencedImageDetail withArtifactMediaType(String artifactMediaType) {
        this.artifactMediaType = artifactMediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDigest")
    public String imageDigest;
    public ReferencedImageDetail withImageDigest(String imageDigest) {
        this.imageDigest = imageDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageManifestMediaType")
    public String imageManifestMediaType;
    public ReferencedImageDetail withImageManifestMediaType(String imageManifestMediaType) {
        this.imageManifestMediaType = imageManifestMediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("imagePushedAt")
    public OffsetDateTime imagePushedAt;
    public ReferencedImageDetail withImagePushedAt(OffsetDateTime imagePushedAt) {
        this.imagePushedAt = imagePushedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageSizeInBytes")
    public Long imageSizeInBytes;
    public ReferencedImageDetail withImageSizeInBytes(Long imageSizeInBytes) {
        this.imageSizeInBytes = imageSizeInBytes;
        return this;
    }
}