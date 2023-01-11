package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentSubmoduleLinks {
    @JsonProperty("git")
    public String git;
    public ContentSubmoduleLinks withGit(String git) {
        this.git = git;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public ContentSubmoduleLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonProperty("self")
    public String self;
    public ContentSubmoduleLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}