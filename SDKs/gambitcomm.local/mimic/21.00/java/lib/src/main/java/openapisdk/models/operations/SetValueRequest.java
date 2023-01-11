package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetValueRequest {
    public SetValuePathParams pathParams;
    public SetValueRequest withPathParams(SetValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public SetValueRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}