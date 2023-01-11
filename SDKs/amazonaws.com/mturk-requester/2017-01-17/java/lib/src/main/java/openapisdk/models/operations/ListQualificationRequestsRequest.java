package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQualificationRequestsRequest {
    public ListQualificationRequestsQueryParams queryParams;
    public ListQualificationRequestsRequest withQueryParams(ListQualificationRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListQualificationRequestsHeaders headers;
    public ListQualificationRequestsRequest withHeaders(ListQualificationRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListQualificationRequestsRequest request;
    public ListQualificationRequestsRequest withRequest(openapisdk.models.shared.ListQualificationRequestsRequest request) {
        this.request = request;
        return this;
    }
}