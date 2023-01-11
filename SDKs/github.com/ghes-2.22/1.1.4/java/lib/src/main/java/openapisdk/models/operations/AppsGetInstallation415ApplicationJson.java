package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsGetInstallation415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public AppsGetInstallation415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public AppsGetInstallation415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}