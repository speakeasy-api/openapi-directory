package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterApplicationRevisionInput
 * Represents the input of a RegisterApplicationRevision operation.
**/
public class RegisterApplicationRevisionInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public RegisterApplicationRevisionInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RegisterApplicationRevisionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("revision")
    public RevisionLocation revision;
    public RegisterApplicationRevisionInput withRevision(RevisionLocation revision) {
        this.revision = revision;
        return this;
    }
}