package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum phase;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains withPhase(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum phase) {
        this.phase = phase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress progress;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains withProgress(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems spec;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains withSpec(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems spec) {
        this.spec = spec;
        return this;
    }
}