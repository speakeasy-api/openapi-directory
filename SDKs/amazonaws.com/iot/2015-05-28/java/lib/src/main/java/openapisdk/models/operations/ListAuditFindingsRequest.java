package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuditFindingsRequest {
    public ListAuditFindingsQueryParams queryParams;
    public ListAuditFindingsRequest withQueryParams(ListAuditFindingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAuditFindingsHeaders headers;
    public ListAuditFindingsRequest withHeaders(ListAuditFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAuditFindingsRequestBody request;
    public ListAuditFindingsRequest withRequest(ListAuditFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}