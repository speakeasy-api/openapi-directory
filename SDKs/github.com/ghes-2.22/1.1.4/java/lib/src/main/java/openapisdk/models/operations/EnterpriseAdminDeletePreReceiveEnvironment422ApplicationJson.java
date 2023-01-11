package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors[] errors;
    public EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson withErrors(EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}