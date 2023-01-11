package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposUpdateBranchProtection415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ReposUpdateBranchProtection415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ReposUpdateBranchProtection415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}