package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MsetValueRequest {
    public MsetValuePathParams pathParams;
    public MsetValueRequest withPathParams(MsetValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[][] request;
    public MsetValueRequest withRequest(String[][] request) {
        this.request = request;
        return this;
    }
}