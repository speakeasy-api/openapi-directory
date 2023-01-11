package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsDelete403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ProjectsDelete403ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String[] errors;
    public ProjectsDelete403ApplicationJson withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ProjectsDelete403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}