package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildsRequest {
    public ListBuildsQueryParams queryParams;
    public ListBuildsRequest withQueryParams(ListBuildsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBuildsHeaders headers;
    public ListBuildsRequest withHeaders(ListBuildsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBuildsInput request;
    public ListBuildsRequest withRequest(openapisdk.models.shared.ListBuildsInput request) {
        this.request = request;
        return this;
    }
}