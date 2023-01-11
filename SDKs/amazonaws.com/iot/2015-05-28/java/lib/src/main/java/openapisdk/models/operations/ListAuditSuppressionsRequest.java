package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuditSuppressionsRequest {
    public ListAuditSuppressionsQueryParams queryParams;
    public ListAuditSuppressionsRequest withQueryParams(ListAuditSuppressionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAuditSuppressionsHeaders headers;
    public ListAuditSuppressionsRequest withHeaders(ListAuditSuppressionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAuditSuppressionsRequestBody request;
    public ListAuditSuppressionsRequest withRequest(ListAuditSuppressionsRequestBody request) {
        this.request = request;
        return this;
    }
}