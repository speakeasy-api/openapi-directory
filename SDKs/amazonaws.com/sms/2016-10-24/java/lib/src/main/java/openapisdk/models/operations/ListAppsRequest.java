package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAppsRequest {
    public ListAppsHeaders headers;
    public ListAppsRequest withHeaders(ListAppsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAppsRequest request;
    public ListAppsRequest withRequest(openapisdk.models.shared.ListAppsRequest request) {
        this.request = request;
        return this;
    }
}