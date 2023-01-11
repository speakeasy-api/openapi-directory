package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationRevisionRequest {
    public GetApplicationRevisionHeaders headers;
    public GetApplicationRevisionRequest withHeaders(GetApplicationRevisionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetApplicationRevisionInput request;
    public GetApplicationRevisionRequest withRequest(openapisdk.models.shared.GetApplicationRevisionInput request) {
        this.request = request;
        return this;
    }
}