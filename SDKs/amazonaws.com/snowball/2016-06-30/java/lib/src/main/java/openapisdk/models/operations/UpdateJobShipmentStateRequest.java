package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJobShipmentStateRequest {
    public UpdateJobShipmentStateHeaders headers;
    public UpdateJobShipmentStateRequest withHeaders(UpdateJobShipmentStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateJobShipmentStateRequest request;
    public UpdateJobShipmentStateRequest withRequest(openapisdk.models.shared.UpdateJobShipmentStateRequest request) {
        this.request = request;
        return this;
    }
}