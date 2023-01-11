package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LicenseContentLinks {
    @JsonProperty("git")
    public String git;
    public LicenseContentLinks withGit(String git) {
        this.git = git;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public LicenseContentLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonProperty("self")
    public String self;
    public LicenseContentLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}