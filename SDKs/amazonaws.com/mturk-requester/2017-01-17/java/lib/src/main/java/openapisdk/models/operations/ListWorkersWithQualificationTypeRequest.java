package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkersWithQualificationTypeRequest {
    public ListWorkersWithQualificationTypeQueryParams queryParams;
    public ListWorkersWithQualificationTypeRequest withQueryParams(ListWorkersWithQualificationTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkersWithQualificationTypeHeaders headers;
    public ListWorkersWithQualificationTypeRequest withHeaders(ListWorkersWithQualificationTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWorkersWithQualificationTypeRequest request;
    public ListWorkersWithQualificationTypeRequest withRequest(openapisdk.models.shared.ListWorkersWithQualificationTypeRequest request) {
        this.request = request;
        return this;
    }
}