package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ControlChargerChargingRequestBody {
    @JsonProperty("action")
    public ControlChargerChargingRequestBodyActionEnum action;
    public ControlChargerChargingRequestBody withAction(ControlChargerChargingRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
}