package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetApplicationRevisionOutput
 * Represents the output of a <code>GetApplicationRevision</code> operation.
**/
public class GetApplicationRevisionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public GetApplicationRevisionOutput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public RevisionLocation revision;
    public GetApplicationRevisionOutput withRevision(RevisionLocation revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionInfo")
    public GenericRevisionInfo revisionInfo;
    public GetApplicationRevisionOutput withRevisionInfo(GenericRevisionInfo revisionInfo) {
        this.revisionInfo = revisionInfo;
        return this;
    }
}