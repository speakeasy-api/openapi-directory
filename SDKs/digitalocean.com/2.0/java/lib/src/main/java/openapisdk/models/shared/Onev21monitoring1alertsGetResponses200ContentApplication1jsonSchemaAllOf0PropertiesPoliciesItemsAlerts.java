package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts {
    @JsonProperty("email")
    public String[] email;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts withEmail(String[] email) {
        this.email = email;
        return this;
    }
    @JsonProperty("slack")
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack[] slack;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts withSlack(Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack[] slack) {
        this.slack = slack;
        return this;
    }
}