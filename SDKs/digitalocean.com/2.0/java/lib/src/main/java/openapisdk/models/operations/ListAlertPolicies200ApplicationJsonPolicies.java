package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAlertPolicies200ApplicationJsonPolicies {
    @JsonProperty("alerts")
    public ListAlertPolicies200ApplicationJsonPoliciesAlerts alerts;
    public ListAlertPolicies200ApplicationJsonPolicies withAlerts(ListAlertPolicies200ApplicationJsonPoliciesAlerts alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonProperty("compare")
    public ListAlertPolicies200ApplicationJsonPoliciesCompareEnum compare;
    public ListAlertPolicies200ApplicationJsonPolicies withCompare(ListAlertPolicies200ApplicationJsonPoliciesCompareEnum compare) {
        this.compare = compare;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public ListAlertPolicies200ApplicationJsonPolicies withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ListAlertPolicies200ApplicationJsonPolicies withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("entities")
    public String[] entities;
    public ListAlertPolicies200ApplicationJsonPolicies withEntities(String[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public ListAlertPolicies200ApplicationJsonPolicies withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public ListAlertPolicies200ApplicationJsonPoliciesTypeEnum type;
    public ListAlertPolicies200ApplicationJsonPolicies withType(ListAlertPolicies200ApplicationJsonPoliciesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public ListAlertPolicies200ApplicationJsonPolicies withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonProperty("value")
    public Float value;
    public ListAlertPolicies200ApplicationJsonPolicies withValue(Float value) {
        this.value = value;
        return this;
    }
    @JsonProperty("window")
    public ListAlertPolicies200ApplicationJsonPoliciesWindowEnum window;
    public ListAlertPolicies200ApplicationJsonPolicies withWindow(ListAlertPolicies200ApplicationJsonPoliciesWindowEnum window) {
        this.window = window;
        return this;
    }
}