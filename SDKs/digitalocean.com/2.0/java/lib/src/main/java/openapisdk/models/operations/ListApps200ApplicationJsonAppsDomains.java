package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApps200ApplicationJsonAppsDomains {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListApps200ApplicationJsonAppsDomains withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public ListApps200ApplicationJsonAppsDomainsPhaseEnum phase;
    public ListApps200ApplicationJsonAppsDomains withPhase(ListApps200ApplicationJsonAppsDomainsPhaseEnum phase) {
        this.phase = phase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public ListApps200ApplicationJsonAppsDomainsProgress progress;
    public ListApps200ApplicationJsonAppsDomains withProgress(ListApps200ApplicationJsonAppsDomainsProgress progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems spec;
    public ListApps200ApplicationJsonAppsDomains withSpec(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems spec) {
        this.spec = spec;
        return this;
    }
}