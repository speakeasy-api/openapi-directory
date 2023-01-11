package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQualificationTypesRequest {
    public ListQualificationTypesQueryParams queryParams;
    public ListQualificationTypesRequest withQueryParams(ListQualificationTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListQualificationTypesHeaders headers;
    public ListQualificationTypesRequest withHeaders(ListQualificationTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListQualificationTypesRequest request;
    public ListQualificationTypesRequest withRequest(openapisdk.models.shared.ListQualificationTypesRequest request) {
        this.request = request;
        return this;
    }
}