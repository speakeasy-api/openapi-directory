package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCelebrityInfoRequest {
    public GetCelebrityInfoHeaders headers;
    public GetCelebrityInfoRequest withHeaders(GetCelebrityInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCelebrityInfoRequest request;
    public GetCelebrityInfoRequest withRequest(openapisdk.models.shared.GetCelebrityInfoRequest request) {
        this.request = request;
        return this;
    }
}