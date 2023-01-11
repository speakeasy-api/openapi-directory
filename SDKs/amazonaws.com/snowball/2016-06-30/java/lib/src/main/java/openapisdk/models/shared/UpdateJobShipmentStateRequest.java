package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateJobShipmentStateRequest {
    @JsonProperty("JobId")
    public String jobId;
    public UpdateJobShipmentStateRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("ShipmentState")
    public ShipmentStateEnum shipmentState;
    public UpdateJobShipmentStateRequest withShipmentState(ShipmentStateEnum shipmentState) {
        this.shipmentState = shipmentState;
        return this;
    }
}