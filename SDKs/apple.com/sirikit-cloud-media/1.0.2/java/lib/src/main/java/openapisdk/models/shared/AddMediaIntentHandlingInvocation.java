package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMediaIntentHandlingInvocation {
    @JsonProperty("method")
    public String method;
    public AddMediaIntentHandlingInvocation withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public AddMediaIntentHandlingInvocation withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public Session session;
    public AddMediaIntentHandlingInvocation withSession(Session session) {
        this.session = session;
        return this;
    }
}