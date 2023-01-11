package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * Tag
**/
public class Tag {
    @JsonProperty("commit")
    public TagCommit commit;
    public Tag withCommit(TagCommit commit) {
        this.commit = commit;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Tag withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Tag withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("tarball_url")
    public String tarballUrl;
    public Tag withTarballUrl(String tarballUrl) {
        this.tarballUrl = tarballUrl;
        return this;
    }
    @JsonProperty("zipball_url")
    public String zipballUrl;
    public Tag withZipballUrl(String zipballUrl) {
        this.zipballUrl = zipballUrl;
        return this;
    }
}