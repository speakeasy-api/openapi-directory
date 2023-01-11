package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum environment;
    public Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput withEnvironment(Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public String purpose;
    public Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
}