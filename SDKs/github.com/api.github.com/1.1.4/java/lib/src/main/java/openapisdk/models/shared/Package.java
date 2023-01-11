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
 * Package
 * A software package
**/
public class Package {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Package withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Package withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Package withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Package withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public PackageSimpleUser owner;
    public Package withOwner(PackageSimpleUser owner) {
        this.owner = owner;
        return this;
    }
    @JsonProperty("package_type")
    public PackagePackageTypeEnum packageType;
    public Package withPackageType(PackagePackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public PackageMinimalRepository repository;
    public Package withRepository(PackageMinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Package withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Package withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("version_count")
    public Long versionCount;
    public Package withVersionCount(Long versionCount) {
        this.versionCount = versionCount;
        return this;
    }
    @JsonProperty("visibility")
    public PackageVisibilityEnum visibility;
    public Package withVisibility(PackageVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}