package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDocumentClassificationJobsRequest {
    public ListDocumentClassificationJobsQueryParams queryParams;
    public ListDocumentClassificationJobsRequest withQueryParams(ListDocumentClassificationJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDocumentClassificationJobsHeaders headers;
    public ListDocumentClassificationJobsRequest withHeaders(ListDocumentClassificationJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDocumentClassificationJobsRequest request;
    public ListDocumentClassificationJobsRequest withRequest(openapisdk.models.shared.ListDocumentClassificationJobsRequest request) {
        this.request = request;
        return this;
    }
}