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
 * ImageTagDetail
 * An object representing the image tag details for an image.
**/
public class ImageTagDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ImageTagDetail withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDetail")
    public ReferencedImageDetail imageDetail;
    public ImageTagDetail withImageDetail(ReferencedImageDetail imageDetail) {
        this.imageDetail = imageDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTag")
    public String imageTag;
    public ImageTagDetail withImageTag(String imageTag) {
        this.imageTag = imageTag;
        return this;
    }
}