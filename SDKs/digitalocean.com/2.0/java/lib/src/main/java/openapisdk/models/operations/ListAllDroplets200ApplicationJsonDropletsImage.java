package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListAllDroplets200ApplicationJsonDropletsImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListAllDroplets200ApplicationJsonDropletsImage withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ListAllDroplets200ApplicationJsonDropletsImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum distribution;
    public ListAllDroplets200ApplicationJsonDropletsImage withDistribution(ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_message")
    public String errorMessage;
    public ListAllDroplets200ApplicationJsonDropletsImage withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ListAllDroplets200ApplicationJsonDropletsImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_disk_size")
    public Long minDiskSize;
    public ListAllDroplets200ApplicationJsonDropletsImage withMinDiskSize(Long minDiskSize) {
        this.minDiskSize = minDiskSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAllDroplets200ApplicationJsonDropletsImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public ListAllDroplets200ApplicationJsonDropletsImage withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum[] regions;
    public ListAllDroplets200ApplicationJsonDropletsImage withRegions(ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_gigabytes")
    public Float sizeGigabytes;
    public ListAllDroplets200ApplicationJsonDropletsImage withSizeGigabytes(Float sizeGigabytes) {
        this.sizeGigabytes = sizeGigabytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public ListAllDroplets200ApplicationJsonDropletsImage withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListAllDroplets200ApplicationJsonDropletsImageStatusEnum status;
    public ListAllDroplets200ApplicationJsonDropletsImage withStatus(ListAllDroplets200ApplicationJsonDropletsImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ListAllDroplets200ApplicationJsonDropletsImage withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListAllDroplets200ApplicationJsonDropletsImageTypeEnum type;
    public ListAllDroplets200ApplicationJsonDropletsImage withType(ListAllDroplets200ApplicationJsonDropletsImageTypeEnum type) {
        this.type = type;
        return this;
    }
}