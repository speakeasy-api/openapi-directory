package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobDetailsRequest {
    public GetJobDetailsHeaders headers;
    public GetJobDetailsRequest withHeaders(GetJobDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobDetailsInput request;
    public GetJobDetailsRequest withRequest(openapisdk.models.shared.GetJobDetailsInput request) {
        this.request = request;
        return this;
    }
}