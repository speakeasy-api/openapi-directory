package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SessionContext
 * Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
**/
public class SessionContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public SessionContextAttributes attributes;
    public SessionContext withAttributes(SessionContextAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionIssuer")
    public SessionIssuer sessionIssuer;
    public SessionContext withSessionIssuer(SessionIssuer sessionIssuer) {
        this.sessionIssuer = sessionIssuer;
        return this;
    }
}