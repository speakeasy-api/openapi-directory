package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LicenseContent
 * License Content
**/
public class LicenseContent {
    @JsonProperty("_links")
    public LicenseContentLinks links;
    public LicenseContent withLinks(LicenseContentLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("content")
    public String content;
    public LicenseContent withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("download_url")
    public String downloadUrl;
    public LicenseContent withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonProperty("encoding")
    public String encoding;
    public LicenseContent withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonProperty("git_url")
    public String gitUrl;
    public LicenseContent withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public LicenseContent withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("license")
    public LicenseContentLicenseSimple license;
    public LicenseContent withLicense(LicenseContentLicenseSimple license) {
        this.license = license;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LicenseContent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public LicenseContent withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public LicenseContent withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public LicenseContent withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public LicenseContent withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public LicenseContent withUrl(String url) {
        this.url = url;
        return this;
    }
}