package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListDropletBackups200ApplicationJsonBackups {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListDropletBackups200ApplicationJsonBackups withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public ListDropletBackups200ApplicationJsonBackups withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("min_disk_size")
    public Long minDiskSize;
    public ListDropletBackups200ApplicationJsonBackups withMinDiskSize(Long minDiskSize) {
        this.minDiskSize = minDiskSize;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDropletBackups200ApplicationJsonBackups withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("regions")
    public String[] regions;
    public ListDropletBackups200ApplicationJsonBackups withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonProperty("size_gigabytes")
    public Float sizeGigabytes;
    public ListDropletBackups200ApplicationJsonBackups withSizeGigabytes(Float sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonProperty("type")
    public ListDropletBackups200ApplicationJsonBackupsTypeEnum type;
    public ListDropletBackups200ApplicationJsonBackups withType(ListDropletBackups200ApplicationJsonBackupsTypeEnum type) {
        this.type = type;
        return this;
    }
}