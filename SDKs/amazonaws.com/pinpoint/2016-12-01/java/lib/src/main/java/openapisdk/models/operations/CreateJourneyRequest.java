package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateJourneyRequest {
    public CreateJourneyPathParams pathParams;
    public CreateJourneyRequest withPathParams(CreateJourneyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateJourneyHeaders headers;
    public CreateJourneyRequest withHeaders(CreateJourneyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateJourneyRequestBody request;
    public CreateJourneyRequest withRequest(CreateJourneyRequestBody request) {
        this.request = request;
        return this;
    }
}