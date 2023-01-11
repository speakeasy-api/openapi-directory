package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IdentityProviderConfig
 * An object representing an identity provider configuration.
**/
public class IdentityProviderConfig {
    @JsonProperty("name")
    public String name;
    public IdentityProviderConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public IdentityProviderConfig withType(String type) {
        this.type = type;
        return this;
    }
}