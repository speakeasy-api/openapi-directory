package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors[] errors;
    public TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson withErrors(TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}