package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DebugSession
 * Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.
**/
public class DebugSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionEnabled")
    public Boolean sessionEnabled;
    public DebugSession withSessionEnabled(Boolean sessionEnabled) {
        this.sessionEnabled = sessionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionTarget")
    public String sessionTarget;
    public DebugSession withSessionTarget(String sessionTarget) {
        this.sessionTarget = sessionTarget;
        return this;
    }
}