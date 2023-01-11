package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchOrganizationRequestBodyConfigurations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthEnabled")
    public Boolean basicAuthEnabled;
    public PatchOrganizationRequestBodyConfigurations withBasicAuthEnabled(Boolean basicAuthEnabled) {
        this.basicAuthEnabled = basicAuthEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthPassword")
    public Boolean basicAuthPassword;
    public PatchOrganizationRequestBodyConfigurations withBasicAuthPassword(Boolean basicAuthPassword) {
        this.basicAuthPassword = basicAuthPassword;
        return this;
    }
}