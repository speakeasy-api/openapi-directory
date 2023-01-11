package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry")
    public String registry;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage withRegistry(String registry) {
        this.registry = registry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_type")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum registryType;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage withRegistryType(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum registryType) {
        this.registryType = registryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage withTag(String tag) {
        this.tag = tag;
        return this;
    }
}