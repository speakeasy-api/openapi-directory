package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullsUpdateBranch415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public PullsUpdateBranch415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PullsUpdateBranch415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}