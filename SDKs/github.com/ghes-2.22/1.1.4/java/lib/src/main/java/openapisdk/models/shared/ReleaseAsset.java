package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ReleaseAsset
 * Data related to a release.
**/
public class ReleaseAsset {
    @JsonProperty("browser_download_url")
    public String browserDownloadUrl;
    public ReleaseAsset withBrowserDownloadUrl(String browserDownloadUrl) {
        this.browserDownloadUrl = browserDownloadUrl;
        return this;
    }
    @JsonProperty("content_type")
    public String contentType;
    public ReleaseAsset withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ReleaseAsset withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("download_count")
    public Long downloadCount;
    public ReleaseAsset withDownloadCount(Long downloadCount) {
        this.downloadCount = downloadCount;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public ReleaseAsset withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public ReleaseAsset withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReleaseAsset withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public ReleaseAsset withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public ReleaseAsset withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonProperty("state")
    public ReleaseAssetStateEnum state;
    public ReleaseAsset withState(ReleaseAssetStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ReleaseAsset withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("uploader")
    public ReleaseAssetSimpleUser uploader;
    public ReleaseAsset withUploader(ReleaseAssetSimpleUser uploader) {
        this.uploader = uploader;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ReleaseAsset withUrl(String url) {
        this.url = url;
        return this;
    }
}