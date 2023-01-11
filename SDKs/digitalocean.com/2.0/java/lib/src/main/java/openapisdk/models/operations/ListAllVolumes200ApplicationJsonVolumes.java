package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllVolumes200ApplicationJsonVolumes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public ListAllVolumes200ApplicationJsonVolumes withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ListAllVolumes200ApplicationJsonVolumes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public ListAllVolumes200ApplicationJsonVolumes withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesystem_label")
    public String filesystemLabel;
    public ListAllVolumes200ApplicationJsonVolumes withFilesystemLabel(String filesystemLabel) {
        this.filesystemLabel = filesystemLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesystem_type")
    public String filesystemType;
    public ListAllVolumes200ApplicationJsonVolumes withFilesystemType(String filesystemType) {
        this.filesystemType = filesystemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAllVolumes200ApplicationJsonVolumes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAllVolumes200ApplicationJsonVolumes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public ListAllVolumes200ApplicationJsonVolumesRegion region;
    public ListAllVolumes200ApplicationJsonVolumes withRegion(ListAllVolumes200ApplicationJsonVolumesRegion region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_gigabytes")
    public Long sizeGigabytes;
    public ListAllVolumes200ApplicationJsonVolumes withSizeGigabytes(Long sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ListAllVolumes200ApplicationJsonVolumes withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}