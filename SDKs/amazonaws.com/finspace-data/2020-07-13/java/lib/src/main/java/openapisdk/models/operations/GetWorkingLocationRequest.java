package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkingLocationRequest {
    public GetWorkingLocationHeaders headers;
    public GetWorkingLocationRequest withHeaders(GetWorkingLocationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetWorkingLocationRequestBody request;
    public GetWorkingLocationRequest withRequest(GetWorkingLocationRequestBody request) {
        this.request = request;
        return this;
    }
}