package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetCognitoEventsRequest {
    public SetCognitoEventsPathParams pathParams;
    public SetCognitoEventsRequest withPathParams(SetCognitoEventsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetCognitoEventsHeaders headers;
    public SetCognitoEventsRequest withHeaders(SetCognitoEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetCognitoEventsRequestBody request;
    public SetCognitoEventsRequest withRequest(SetCognitoEventsRequestBody request) {
        this.request = request;
        return this;
    }
}