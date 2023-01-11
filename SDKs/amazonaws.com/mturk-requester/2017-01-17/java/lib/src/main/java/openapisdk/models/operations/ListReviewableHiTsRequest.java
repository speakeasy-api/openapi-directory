package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReviewableHiTsRequest {
    public ListReviewableHiTsQueryParams queryParams;
    public ListReviewableHiTsRequest withQueryParams(ListReviewableHiTsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReviewableHiTsHeaders headers;
    public ListReviewableHiTsRequest withHeaders(ListReviewableHiTsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReviewableHiTsRequest request;
    public ListReviewableHiTsRequest withRequest(openapisdk.models.shared.ListReviewableHiTsRequest request) {
        this.request = request;
        return this;
    }
}