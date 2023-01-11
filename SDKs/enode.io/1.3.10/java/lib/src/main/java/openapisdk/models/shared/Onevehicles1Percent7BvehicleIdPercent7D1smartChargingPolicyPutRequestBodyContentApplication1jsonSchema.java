package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadline")
    public String deadline;
    public Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema withDeadline(String deadline) {
        this.deadline = deadline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnabled")
    public Boolean isEnabled;
    public Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
}