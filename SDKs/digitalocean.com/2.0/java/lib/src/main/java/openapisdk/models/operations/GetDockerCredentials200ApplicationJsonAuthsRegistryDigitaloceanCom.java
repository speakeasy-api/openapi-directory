package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth")
    public String auth;
    public GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom withAuth(String auth) {
        this.auth = auth;
        return this;
    }
}