package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResourceShareRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowExternalPrincipals")
    public Boolean allowExternalPrincipals;
    public UpdateResourceShareRequestBody withAllowExternalPrincipals(Boolean allowExternalPrincipals) {
        this.allowExternalPrincipals = allowExternalPrincipals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateResourceShareRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateResourceShareRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("resourceShareArn")
    public String resourceShareArn;
    public UpdateResourceShareRequestBody withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
}