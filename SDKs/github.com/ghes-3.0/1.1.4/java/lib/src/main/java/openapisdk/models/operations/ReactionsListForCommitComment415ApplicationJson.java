package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsListForCommitComment415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ReactionsListForCommitComment415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ReactionsListForCommitComment415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}