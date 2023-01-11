package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageMinimalRepositoryLicense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PackageMinimalRepositoryLicense withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PackageMinimalRepositoryLicense withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public PackageMinimalRepositoryLicense withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spdx_id")
    public String spdxId;
    public PackageMinimalRepositoryLicense withSpdxId(String spdxId) {
        this.spdxId = spdxId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PackageMinimalRepositoryLicense withUrl(String url) {
        this.url = url;
        return this;
    }
}