package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors[] errors;
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson withErrors(EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}