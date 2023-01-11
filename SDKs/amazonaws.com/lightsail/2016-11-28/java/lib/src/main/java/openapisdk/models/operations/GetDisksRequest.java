package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisksRequest {
    public GetDisksHeaders headers;
    public GetDisksRequest withHeaders(GetDisksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDisksRequest request;
    public GetDisksRequest withRequest(openapisdk.models.shared.GetDisksRequest request) {
        this.request = request;
        return this;
    }
}