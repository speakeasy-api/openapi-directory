package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAppsListsRequest {
    public ListAppsListsQueryParams queryParams;
    public ListAppsListsRequest withQueryParams(ListAppsListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAppsListsHeaders headers;
    public ListAppsListsRequest withHeaders(ListAppsListsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAppsListsRequest request;
    public ListAppsListsRequest withRequest(openapisdk.models.shared.ListAppsListsRequest request) {
        this.request = request;
        return this;
    }
}