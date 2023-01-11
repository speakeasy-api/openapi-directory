package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors[] errors;
    public EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson withErrors(EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}