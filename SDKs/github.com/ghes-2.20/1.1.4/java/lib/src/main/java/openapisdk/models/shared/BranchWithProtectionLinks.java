package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BranchWithProtectionLinks {
    @JsonProperty("html")
    public String html;
    public BranchWithProtectionLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonProperty("self")
    public String self;
    public BranchWithProtectionLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}