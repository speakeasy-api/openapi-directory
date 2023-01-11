package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDatabaseFirewallRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput[] rules;
    public UpdateDatabaseFirewallRequestBodyInput withRules(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput[] rules) {
        this.rules = rules;
        return this;
    }
}