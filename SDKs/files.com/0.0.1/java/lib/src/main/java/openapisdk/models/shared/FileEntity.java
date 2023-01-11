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
 * FileEntity
 * List Folders by path
**/
public class FileEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc32")
    public String crc32;
    public FileEntity withCrc32(String crc32) {
        this.crc32 = crc32;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public FileEntity withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_uri")
    public String downloadUri;
    public FileEntity withDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5")
    public String md5;
    public FileEntity withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime_type")
    public String mimeType;
    public FileEntity withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("mtime")
    public OffsetDateTime mtime;
    public FileEntity withMtime(OffsetDateTime mtime) {
        this.mtime = mtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public FileEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String permissions;
    public FileEntity withPermissions(String permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview")
    public PreviewEntity preview;
    public FileEntity withPreview(PreviewEntity preview) {
        this.preview = preview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_id")
    public Integer previewId;
    public FileEntity withPreviewId(Integer previewId) {
        this.previewId = previewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority_color")
    public String priorityColor;
    public FileEntity withPriorityColor(String priorityColor) {
        this.priorityColor = priorityColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("provided_mtime")
    public OffsetDateTime providedMtime;
    public FileEntity withProvidedMtime(OffsetDateTime providedMtime) {
        this.providedMtime = providedMtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public FileEntity withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer size;
    public FileEntity withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subfolders_locked?")
    public Boolean subfoldersLocked;
    public FileEntity withSubfoldersLocked(Boolean subfoldersLocked) {
        this.subfoldersLocked = subfoldersLocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public FileEntity withType(String type) {
        this.type = type;
        return this;
    }
}