package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiskRequest {
    public GetDiskHeaders headers;
    public GetDiskRequest withHeaders(GetDiskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDiskRequest request;
    public GetDiskRequest withRequest(openapisdk.models.shared.GetDiskRequest request) {
        this.request = request;
        return this;
    }
}