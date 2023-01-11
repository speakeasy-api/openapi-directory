package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolverDnssecConfigsRequest {
    public ListResolverDnssecConfigsQueryParams queryParams;
    public ListResolverDnssecConfigsRequest withQueryParams(ListResolverDnssecConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResolverDnssecConfigsHeaders headers;
    public ListResolverDnssecConfigsRequest withHeaders(ListResolverDnssecConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResolverDnssecConfigsRequest request;
    public ListResolverDnssecConfigsRequest withRequest(openapisdk.models.shared.ListResolverDnssecConfigsRequest request) {
        this.request = request;
        return this;
    }
}