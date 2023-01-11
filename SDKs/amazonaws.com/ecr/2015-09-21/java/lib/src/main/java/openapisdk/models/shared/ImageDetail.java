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
 * ImageDetail
 * An object that describes an image returned by a <a>DescribeImages</a> operation.
**/
public class ImageDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactMediaType")
    public String artifactMediaType;
    public ImageDetail withArtifactMediaType(String artifactMediaType) {
        this.artifactMediaType = artifactMediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDigest")
    public String imageDigest;
    public ImageDetail withImageDigest(String imageDigest) {
        this.imageDigest = imageDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageManifestMediaType")
    public String imageManifestMediaType;
    public ImageDetail withImageManifestMediaType(String imageManifestMediaType) {
        this.imageManifestMediaType = imageManifestMediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("imagePushedAt")
    public OffsetDateTime imagePushedAt;
    public ImageDetail withImagePushedAt(OffsetDateTime imagePushedAt) {
        this.imagePushedAt = imagePushedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanFindingsSummary")
    public ImageScanFindingsSummary imageScanFindingsSummary;
    public ImageDetail withImageScanFindingsSummary(ImageScanFindingsSummary imageScanFindingsSummary) {
        this.imageScanFindingsSummary = imageScanFindingsSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageScanStatus")
    public ImageScanStatus imageScanStatus;
    public ImageDetail withImageScanStatus(ImageScanStatus imageScanStatus) {
        this.imageScanStatus = imageScanStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageSizeInBytes")
    public Long imageSizeInBytes;
    public ImageDetail withImageSizeInBytes(Long imageSizeInBytes) {
        this.imageSizeInBytes = imageSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTags")
    public String[] imageTags;
    public ImageDetail withImageTags(String[] imageTags) {
        this.imageTags = imageTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public ImageDetail withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public ImageDetail withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}