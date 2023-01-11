package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterClientRequestBody {
    @JsonProperty("clientName")
    public String clientName;
    public RegisterClientRequestBody withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonProperty("clientType")
    public String clientType;
    public RegisterClientRequestBody withClientType(String clientType) {
        this.clientType = clientType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public RegisterClientRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}