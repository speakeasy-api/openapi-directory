package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computed_md5")
    public String computedMd5;
    public PublicFile withComputedMd5(String computedMd5) {
        this.computedMd5 = computedMd5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public PublicFile withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PublicFile withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_link_only")
    public Boolean isLinkOnly;
    public PublicFile withIsLinkOnly(Boolean isLinkOnly) {
        this.isLinkOnly = isLinkOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PublicFile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PublicFile withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplied_md5")
    public String suppliedMd5;
    public PublicFile withSuppliedMd5(String suppliedMd5) {
        this.suppliedMd5 = suppliedMd5;
        return this;
    }
}