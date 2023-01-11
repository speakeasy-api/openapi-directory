package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssueRefundRequest {
    public IssueRefundPathParams pathParams;
    public IssueRefundRequest withPathParams(IssueRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IssueRefundRequest request;
    public IssueRefundRequest withRequest(openapisdk.models.shared.IssueRefundRequest request) {
        this.request = request;
        return this;
    }
    public IssueRefundSecurity security;
    public IssueRefundRequest withSecurity(IssueRefundSecurity security) {
        this.security = security;
        return this;
    }
}