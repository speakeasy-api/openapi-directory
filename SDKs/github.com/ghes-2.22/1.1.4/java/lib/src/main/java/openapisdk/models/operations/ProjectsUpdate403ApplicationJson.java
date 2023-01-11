package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsUpdate403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ProjectsUpdate403ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String[] errors;
    public ProjectsUpdate403ApplicationJson withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ProjectsUpdate403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}