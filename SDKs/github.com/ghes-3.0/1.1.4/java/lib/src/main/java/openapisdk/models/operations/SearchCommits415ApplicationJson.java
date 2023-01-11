package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchCommits415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public SearchCommits415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public SearchCommits415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}