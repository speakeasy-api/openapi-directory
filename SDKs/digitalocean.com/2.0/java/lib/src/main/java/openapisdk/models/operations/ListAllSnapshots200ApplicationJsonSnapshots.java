package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListAllSnapshots200ApplicationJsonSnapshots {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListAllSnapshots200ApplicationJsonSnapshots withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ListAllSnapshots200ApplicationJsonSnapshots withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("min_disk_size")
    public Long minDiskSize;
    public ListAllSnapshots200ApplicationJsonSnapshots withMinDiskSize(Long minDiskSize) {
        this.minDiskSize = minDiskSize;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllSnapshots200ApplicationJsonSnapshots withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("regions")
    public String[] regions;
    public ListAllSnapshots200ApplicationJsonSnapshots withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonProperty("resource_id")
    public String resourceId;
    public ListAllSnapshots200ApplicationJsonSnapshots withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("resource_type")
    public ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum resourceType;
    public ListAllSnapshots200ApplicationJsonSnapshots withResourceType(ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("size_gigabytes")
    public Float sizeGigabytes;
    public ListAllSnapshots200ApplicationJsonSnapshots withSizeGigabytes(Float sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public ListAllSnapshots200ApplicationJsonSnapshots withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}