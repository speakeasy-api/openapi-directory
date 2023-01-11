package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsCreateInstallationAccessToken415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public AppsCreateInstallationAccessToken415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public AppsCreateInstallationAccessToken415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}