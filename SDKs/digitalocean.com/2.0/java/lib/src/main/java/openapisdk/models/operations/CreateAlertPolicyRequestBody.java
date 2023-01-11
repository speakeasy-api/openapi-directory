package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAlertPolicyRequestBody {
    @JsonProperty("alerts")
    public openapisdk.models.shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts alerts;
    public CreateAlertPolicyRequestBody withAlerts(openapisdk.models.shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonProperty("compare")
    public CreateAlertPolicyRequestBodyCompareEnum compare;
    public CreateAlertPolicyRequestBody withCompare(CreateAlertPolicyRequestBodyCompareEnum compare) {
        this.compare = compare;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public CreateAlertPolicyRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateAlertPolicyRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("entities")
    public String[] entities;
    public CreateAlertPolicyRequestBody withEntities(String[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public CreateAlertPolicyRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public CreateAlertPolicyRequestBodyTypeEnum type;
    public CreateAlertPolicyRequestBody withType(CreateAlertPolicyRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public Float value;
    public CreateAlertPolicyRequestBody withValue(Float value) {
        this.value = value;
        return this;
    }
    @JsonProperty("window")
    public CreateAlertPolicyRequestBodyWindowEnum window;
    public CreateAlertPolicyRequestBody withWindow(CreateAlertPolicyRequestBodyWindowEnum window) {
        this.window = window;
        return this;
    }
}