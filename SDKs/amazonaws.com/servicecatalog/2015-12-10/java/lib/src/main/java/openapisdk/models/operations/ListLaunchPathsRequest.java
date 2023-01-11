package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLaunchPathsRequest {
    public ListLaunchPathsQueryParams queryParams;
    public ListLaunchPathsRequest withQueryParams(ListLaunchPathsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLaunchPathsHeaders headers;
    public ListLaunchPathsRequest withHeaders(ListLaunchPathsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLaunchPathsInput request;
    public ListLaunchPathsRequest withRequest(openapisdk.models.shared.ListLaunchPathsInput request) {
        this.request = request;
        return this;
    }
}