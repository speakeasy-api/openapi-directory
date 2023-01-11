package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayMediaIntentHandlingInvocation {
    @JsonProperty("method")
    public String method;
    public PlayMediaIntentHandlingInvocation withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public PlayMediaIntentHandlingInvocation withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public Session session;
    public PlayMediaIntentHandlingInvocation withSession(Session session) {
        this.session = session;
        return this;
    }
}