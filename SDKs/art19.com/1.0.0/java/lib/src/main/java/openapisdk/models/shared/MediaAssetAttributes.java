package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MediaAssetAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment_id")
    public String attachmentId;
    public MediaAssetAttributes withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment_type")
    public MediaAssetAttributesAttachmentTypeEnum attachmentType;
    public MediaAssetAttributes withAttachmentType(MediaAssetAttributesAttachmentTypeEnum attachmentType) {
        this.attachmentType = attachmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cdn_url")
    public String cdnUrl;
    public MediaAssetAttributes withCdnUrl(String cdnUrl) {
        this.cdnUrl = cdnUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public MediaAssetAttributes withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public MediaAssetAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_name")
    public String fileName;
    public MediaAssetAttributes withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Long fileSize;
    public MediaAssetAttributes withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_height")
    public Long sizeHeight;
    public MediaAssetAttributes withSizeHeight(Long sizeHeight) {
        this.sizeHeight = sizeHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_width")
    public Long sizeWidth;
    public MediaAssetAttributes withSizeWidth(Long sizeWidth) {
        this.sizeWidth = sizeWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("style")
    public MediaAssetAttributesStyleEnum style;
    public MediaAssetAttributes withStyle(MediaAssetAttributesStyleEnum style) {
        this.style = style;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public MediaAssetAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}