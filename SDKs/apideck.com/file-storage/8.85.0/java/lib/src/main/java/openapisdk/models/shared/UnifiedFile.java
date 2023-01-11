package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UnifiedFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public UnifiedFile withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public UnifiedFile withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UnifiedFile withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public Boolean downloadable;
    public UnifiedFile withDownloadable(Boolean downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downstream_id")
    public String downstreamId;
    public UnifiedFile withDownstreamId(String downstreamId) {
        this.downstreamId = downstreamId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UnifiedFile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime_type")
    public String mimeType;
    public UnifiedFile withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UnifiedFile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public Owner owner;
    public UnifiedFile withOwner(Owner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_folders")
    public LinkedFolder[] parentFolders;
    public UnifiedFile withParentFolders(LinkedFolder[] parentFolders) {
        this.parentFolders = parentFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_folders_complete")
    public Boolean parentFoldersComplete;
    public UnifiedFile withParentFoldersComplete(Boolean parentFoldersComplete) {
        this.parentFoldersComplete = parentFoldersComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public UnifiedFile withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public UnifiedFile withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public FileTypeEnum type;
    public UnifiedFile withType(FileTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public UnifiedFile withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public UnifiedFile withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}