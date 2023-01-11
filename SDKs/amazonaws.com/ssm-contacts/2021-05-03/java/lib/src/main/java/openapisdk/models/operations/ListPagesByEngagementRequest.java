package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPagesByEngagementRequest {
    public ListPagesByEngagementQueryParams queryParams;
    public ListPagesByEngagementRequest withQueryParams(ListPagesByEngagementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPagesByEngagementHeaders headers;
    public ListPagesByEngagementRequest withHeaders(ListPagesByEngagementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPagesByEngagementRequest request;
    public ListPagesByEngagementRequest withRequest(openapisdk.models.shared.ListPagesByEngagementRequest request) {
        this.request = request;
        return this;
    }
}