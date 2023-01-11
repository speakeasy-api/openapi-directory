package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}