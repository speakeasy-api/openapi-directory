package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Registry
 * The details of a public registry.
**/
public class Registry {
    @JsonProperty("aliases")
    public RegistryAlias[] aliases;
    public Registry withAliases(RegistryAlias[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonProperty("registryArn")
    public String registryArn;
    public Registry withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
    @JsonProperty("registryId")
    public String registryId;
    public Registry withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("registryUri")
    public String registryUri;
    public Registry withRegistryUri(String registryUri) {
        this.registryUri = registryUri;
        return this;
    }
    @JsonProperty("verified")
    public Boolean verified;
    public Registry withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}