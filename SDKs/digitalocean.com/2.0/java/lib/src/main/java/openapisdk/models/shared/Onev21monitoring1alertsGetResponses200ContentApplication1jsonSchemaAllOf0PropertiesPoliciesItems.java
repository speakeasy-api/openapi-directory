package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems {
    @JsonProperty("alerts")
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts alerts;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withAlerts(Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonProperty("compare")
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum compare;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withCompare(Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum compare) {
        this.compare = compare;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("entities")
    public String[] entities;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withEntities(String[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum type;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withType(Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonProperty("value")
    public Float value;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withValue(Float value) {
        this.value = value;
        return this;
    }
    @JsonProperty("window")
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum window;
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems withWindow(Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum window) {
        this.window = window;
        return this;
    }
}