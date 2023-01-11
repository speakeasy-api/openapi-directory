package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StoreAlert {
    @JsonProperty("alertId")
    public Integer alertId;
    public StoreAlert withAlertId(Integer alertId) {
        this.alertId = alertId;
        return this;
    }
    @JsonProperty("alertName")
    public String alertName;
    public StoreAlert withAlertName(String alertName) {
        this.alertName = alertName;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public StoreAlert withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("links")
    public StoreAlertLinks links;
    public StoreAlert withLinks(StoreAlertLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public StoreAlertPropertyInfo[] properties;
    public StoreAlert withProperties(StoreAlertPropertyInfo[] properties) {
        this.properties = properties;
        return this;
    }
}