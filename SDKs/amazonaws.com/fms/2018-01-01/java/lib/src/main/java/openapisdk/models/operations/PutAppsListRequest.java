package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAppsListRequest {
    public PutAppsListHeaders headers;
    public PutAppsListRequest withHeaders(PutAppsListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAppsListRequest request;
    public PutAppsListRequest withRequest(openapisdk.models.shared.PutAppsListRequest request) {
        this.request = request;
        return this;
    }
}