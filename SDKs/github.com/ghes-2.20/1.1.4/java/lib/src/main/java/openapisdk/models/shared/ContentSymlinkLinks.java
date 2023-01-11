package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentSymlinkLinks {
    @JsonProperty("git")
    public String git;
    public ContentSymlinkLinks withGit(String git) {
        this.git = git;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public ContentSymlinkLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonProperty("self")
    public String self;
    public ContentSymlinkLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}