package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsGetPermissionForUser415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ProjectsGetPermissionForUser415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ProjectsGetPermissionForUser415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}