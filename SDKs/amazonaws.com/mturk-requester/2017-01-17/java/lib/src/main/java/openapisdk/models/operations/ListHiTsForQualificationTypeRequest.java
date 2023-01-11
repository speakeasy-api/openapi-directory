package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHiTsForQualificationTypeRequest {
    public ListHiTsForQualificationTypeQueryParams queryParams;
    public ListHiTsForQualificationTypeRequest withQueryParams(ListHiTsForQualificationTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHiTsForQualificationTypeHeaders headers;
    public ListHiTsForQualificationTypeRequest withHeaders(ListHiTsForQualificationTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListHiTsForQualificationTypeRequest request;
    public ListHiTsForQualificationTypeRequest withRequest(openapisdk.models.shared.ListHiTsForQualificationTypeRequest request) {
        this.request = request;
        return this;
    }
}