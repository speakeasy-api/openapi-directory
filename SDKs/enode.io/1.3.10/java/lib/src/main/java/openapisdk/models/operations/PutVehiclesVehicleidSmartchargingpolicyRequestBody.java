package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutVehiclesVehicleidSmartchargingpolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadline")
    public String deadline;
    public PutVehiclesVehicleidSmartchargingpolicyRequestBody withDeadline(String deadline) {
        this.deadline = deadline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnabled")
    public Boolean isEnabled;
    public PutVehiclesVehicleidSmartchargingpolicyRequestBody withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
}