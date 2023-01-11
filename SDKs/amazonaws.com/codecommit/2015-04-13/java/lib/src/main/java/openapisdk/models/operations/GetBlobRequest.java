package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlobRequest {
    public GetBlobHeaders headers;
    public GetBlobRequest withHeaders(GetBlobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBlobInput request;
    public GetBlobRequest withRequest(openapisdk.models.shared.GetBlobInput request) {
        this.request = request;
        return this;
    }
}