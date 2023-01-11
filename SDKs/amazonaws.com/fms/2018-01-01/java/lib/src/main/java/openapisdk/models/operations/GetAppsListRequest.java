package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsListRequest {
    public GetAppsListHeaders headers;
    public GetAppsListRequest withHeaders(GetAppsListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAppsListRequest request;
    public GetAppsListRequest withRequest(openapisdk.models.shared.GetAppsListRequest request) {
        this.request = request;
        return this;
    }
}