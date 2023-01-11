package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PagesSourceHash {
    @JsonProperty("branch")
    public String branch;
    public PagesSourceHash withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PagesSourceHash withPath(String path) {
        this.path = path;
        return this;
    }
}