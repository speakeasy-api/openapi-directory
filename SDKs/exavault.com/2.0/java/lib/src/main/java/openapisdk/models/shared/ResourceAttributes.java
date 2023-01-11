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
 * ResourceAttributes
 * Attributes of resource
**/
public class ResourceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("accessedAt")
    public OffsetDateTime accessedAt;
    public ResourceAttributes withAccessedAt(OffsetDateTime accessedAt) {
        this.accessedAt = accessedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessedTime")
    public Integer accessedTime;
    public ResourceAttributes withAccessedTime(Integer accessedTime) {
        this.accessedTime = accessedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ResourceAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public ResourceAttributes withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdTime")
    public Integer createdTime;
    public ResourceAttributes withCreatedTime(Integer createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public String extension;
    public ResourceAttributes withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileCount")
    public Long fileCount;
    public ResourceAttributes withFileCount(Long fileCount) {
        this.fileCount = fileCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public ResourceAttributes withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ResourceAttributes withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewable")
    public Boolean previewable;
    public ResourceAttributes withPreviewable(Boolean previewable) {
        this.previewable = previewable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public ResourceAttributes withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ResourceAttributesTypeEnum type;
    public ResourceAttributes withType(ResourceAttributesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public ResourceAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedTime")
    public Integer updatedTime;
    public ResourceAttributes withUpdatedTime(Integer updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("uploadDate")
    public OffsetDateTime uploadDate;
    public ResourceAttributes withUploadDate(OffsetDateTime uploadDate) {
        this.uploadDate = uploadDate;
        return this;
    }
}