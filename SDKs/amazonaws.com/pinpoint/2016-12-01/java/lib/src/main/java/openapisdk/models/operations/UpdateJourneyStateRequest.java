package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJourneyStateRequest {
    public UpdateJourneyStatePathParams pathParams;
    public UpdateJourneyStateRequest withPathParams(UpdateJourneyStatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateJourneyStateHeaders headers;
    public UpdateJourneyStateRequest withHeaders(UpdateJourneyStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateJourneyStateRequestBody request;
    public UpdateJourneyStateRequest withRequest(UpdateJourneyStateRequestBody request) {
        this.request = request;
        return this;
    }
}