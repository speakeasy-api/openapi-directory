package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceServerScopeType
 * A resource server scope.
**/
public class ResourceServerScopeType {
    @JsonProperty("ScopeDescription")
    public String scopeDescription;
    public ResourceServerScopeType withScopeDescription(String scopeDescription) {
        this.scopeDescription = scopeDescription;
        return this;
    }
    @JsonProperty("ScopeName")
    public String scopeName;
    public ResourceServerScopeType withScopeName(String scopeName) {
        this.scopeName = scopeName;
        return this;
    }
}