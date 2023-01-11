package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFleetActionsRequest {
    public StartFleetActionsHeaders headers;
    public StartFleetActionsRequest withHeaders(StartFleetActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartFleetActionsInput request;
    public StartFleetActionsRequest withRequest(openapisdk.models.shared.StartFleetActionsInput request) {
        this.request = request;
        return this;
    }
}