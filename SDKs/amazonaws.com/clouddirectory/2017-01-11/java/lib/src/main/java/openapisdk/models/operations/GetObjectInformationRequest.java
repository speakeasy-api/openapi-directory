package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectInformationRequest {
    public GetObjectInformationHeaders headers;
    public GetObjectInformationRequest withHeaders(GetObjectInformationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetObjectInformationRequestBody request;
    public GetObjectInformationRequest withRequest(GetObjectInformationRequestBody request) {
        this.request = request;
        return this;
    }
}