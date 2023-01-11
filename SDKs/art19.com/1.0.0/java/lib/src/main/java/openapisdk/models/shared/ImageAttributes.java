package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImageAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket_id")
    public String bucketId;
    public ImageAttributes withBucketId(String bucketId) {
        this.bucketId = bucketId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket_type")
    public ImageAttributesBucketTypeEnum bucketType;
    public ImageAttributes withBucketType(ImageAttributesBucketTypeEnum bucketType) {
        this.bucketType = bucketType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ImageAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop_data")
    public ImageAttributesTheCropAreaWithinTheOriginalMediaAsset cropData;
    public ImageAttributes withCropData(ImageAttributesTheCropAreaWithinTheOriginalMediaAsset cropData) {
        this.cropData = cropData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ImageAttributesStatusEnum status;
    public ImageAttributes withStatus(ImageAttributesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ImageAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}