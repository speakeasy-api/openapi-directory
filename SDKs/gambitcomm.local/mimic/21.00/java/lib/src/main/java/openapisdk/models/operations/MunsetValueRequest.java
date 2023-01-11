package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MunsetValueRequest {
    public MunsetValuePathParams pathParams;
    public MunsetValueRequest withPathParams(MunsetValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[][] request;
    public MunsetValueRequest withRequest(String[][] request) {
        this.request = request;
        return this;
    }
}