package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMediaAffinityIntentHandlingInvocation {
    @JsonProperty("method")
    public String method;
    public UpdateMediaAffinityIntentHandlingInvocation withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public UpdateMediaAffinityIntentHandlingInvocation withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public Session session;
    public UpdateMediaAffinityIntentHandlingInvocation withSession(Session session) {
        this.session = session;
        return this;
    }
}