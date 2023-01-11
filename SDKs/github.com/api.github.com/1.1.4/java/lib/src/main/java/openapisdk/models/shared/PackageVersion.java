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
 * PackageVersion
 * A version of a software package
**/
public class PackageVersion {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PackageVersion withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deleted_at")
    public OffsetDateTime deletedAt;
    public PackageVersion withDeletedAt(OffsetDateTime deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PackageVersion withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public PackageVersion withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PackageVersion withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public PackageVersion withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public PackageVersionPackageVersionMetadata metadata;
    public PackageVersion withMetadata(PackageVersionPackageVersionMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PackageVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("package_html_url")
    public String packageHtmlUrl;
    public PackageVersion withPackageHtmlUrl(String packageHtmlUrl) {
        this.packageHtmlUrl = packageHtmlUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PackageVersion withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PackageVersion withUrl(String url) {
        this.url = url;
        return this;
    }
}