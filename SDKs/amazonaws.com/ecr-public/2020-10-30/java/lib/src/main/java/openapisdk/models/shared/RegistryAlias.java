package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RegistryAlias
 * An object representing the aliases for a public registry. A public registry is given an alias upon creation but a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
**/
public class RegistryAlias {
    @JsonProperty("defaultRegistryAlias")
    public Boolean defaultRegistryAlias;
    public RegistryAlias withDefaultRegistryAlias(Boolean defaultRegistryAlias) {
        this.defaultRegistryAlias = defaultRegistryAlias;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RegistryAlias withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("primaryRegistryAlias")
    public Boolean primaryRegistryAlias;
    public RegistryAlias withPrimaryRegistryAlias(Boolean primaryRegistryAlias) {
        this.primaryRegistryAlias = primaryRegistryAlias;
        return this;
    }
    @JsonProperty("status")
    public RegistryAliasStatusEnum status;
    public RegistryAlias withStatus(RegistryAliasStatusEnum status) {
        this.status = status;
        return this;
    }
}