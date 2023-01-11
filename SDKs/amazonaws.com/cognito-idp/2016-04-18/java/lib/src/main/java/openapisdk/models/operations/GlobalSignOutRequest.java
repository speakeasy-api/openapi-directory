package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GlobalSignOutRequest {
    public GlobalSignOutHeaders headers;
    public GlobalSignOutRequest withHeaders(GlobalSignOutHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlobalSignOutRequest request;
    public GlobalSignOutRequest withRequest(openapisdk.models.shared.GlobalSignOutRequest request) {
        this.request = request;
        return this;
    }
}