package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationRequest {
    public GetApplicationHeaders headers;
    public GetApplicationRequest withHeaders(GetApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetApplicationInput request;
    public GetApplicationRequest withRequest(openapisdk.models.shared.GetApplicationInput request) {
        this.request = request;
        return this;
    }
}