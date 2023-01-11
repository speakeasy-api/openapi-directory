package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepositoryLicenseSimple
 * License Simple
**/
public class RepositoryLicenseSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public RepositoryLicenseSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public RepositoryLicenseSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RepositoryLicenseSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public RepositoryLicenseSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("spdx_id")
    public String spdxId;
    public RepositoryLicenseSimple withSpdxId(String spdxId) {
        this.spdxId = spdxId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public RepositoryLicenseSimple withUrl(String url) {
        this.url = url;
        return this;
    }
}