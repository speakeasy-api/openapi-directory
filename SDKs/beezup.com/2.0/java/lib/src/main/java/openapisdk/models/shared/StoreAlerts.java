package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StoreAlerts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alerts")
    public StoreAlert[] alerts;
    public StoreAlerts withAlerts(StoreAlert[] alerts) {
        this.alerts = alerts;
        return this;
    }
}