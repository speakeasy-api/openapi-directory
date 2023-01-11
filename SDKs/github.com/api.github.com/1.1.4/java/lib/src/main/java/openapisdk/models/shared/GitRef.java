package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitRef
 * Git references within a repository
**/
public class GitRef {
    @JsonProperty("node_id")
    public String nodeId;
    public GitRef withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("object")
    public GitRefObject object;
    public GitRef withObject(GitRefObject object) {
        this.object = object;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public GitRef withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitRef withUrl(String url) {
        this.url = url;
        return this;
    }
}