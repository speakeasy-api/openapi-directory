package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetApplicationRevisionInput
 * Represents the input of a <code>GetApplicationRevision</code> operation.
**/
public class GetApplicationRevisionInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public GetApplicationRevisionInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("revision")
    public RevisionLocation revision;
    public GetApplicationRevisionInput withRevision(RevisionLocation revision) {
        this.revision = revision;
        return this;
    }
}