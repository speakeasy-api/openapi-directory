package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitignoreTemplate
 * Gitignore Template
**/
public class GitignoreTemplate {
    @JsonProperty("name")
    public String name;
    public GitignoreTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("source")
    public String source;
    public GitignoreTemplate withSource(String source) {
        this.source = source;
        return this;
    }
}