package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposGetAllTopics415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ReposGetAllTopics415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ReposGetAllTopics415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}