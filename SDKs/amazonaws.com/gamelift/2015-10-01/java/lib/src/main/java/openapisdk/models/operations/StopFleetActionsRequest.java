package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopFleetActionsRequest {
    public StopFleetActionsHeaders headers;
    public StopFleetActionsRequest withHeaders(StopFleetActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopFleetActionsInput request;
    public StopFleetActionsRequest withRequest(openapisdk.models.shared.StopFleetActionsInput request) {
        this.request = request;
        return this;
    }
}