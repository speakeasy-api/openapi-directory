package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileCommitContentLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public String git;
    public FileCommitContentLinks withGit(String git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public String html;
    public FileCommitContentLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public FileCommitContentLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}