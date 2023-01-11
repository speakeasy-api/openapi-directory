package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentDirectoryLinks {
    @JsonProperty("git")
    public String git;
    public ContentDirectoryLinks withGit(String git) {
        this.git = git;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public ContentDirectoryLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonProperty("self")
    public String self;
    public ContentDirectoryLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}