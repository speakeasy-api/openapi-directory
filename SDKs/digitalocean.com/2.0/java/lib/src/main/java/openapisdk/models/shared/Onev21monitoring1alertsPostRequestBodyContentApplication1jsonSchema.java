package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema {
    @JsonProperty("alerts")
    public Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts alerts;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withAlerts(Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonProperty("compare")
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum compare;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withCompare(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum compare) {
        this.compare = compare;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("entities")
    public String[] entities;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withEntities(String[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum type;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withType(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public Float value;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withValue(Float value) {
        this.value = value;
        return this;
    }
    @JsonProperty("window")
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum window;
    public Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema withWindow(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum window) {
        this.window = window;
        return this;
    }
}