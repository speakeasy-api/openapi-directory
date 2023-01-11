package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceServerType
 * A container for information about a resource server for a user pool.
**/
public class ResourceServerType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identifier")
    public String identifier;
    public ResourceServerType withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ResourceServerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Scopes")
    public ResourceServerScopeType[] scopes;
    public ResourceServerType withScopes(ResourceServerScopeType[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public ResourceServerType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}