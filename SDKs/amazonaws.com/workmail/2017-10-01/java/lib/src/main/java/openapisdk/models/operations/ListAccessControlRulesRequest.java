package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccessControlRulesRequest {
    public ListAccessControlRulesHeaders headers;
    public ListAccessControlRulesRequest withHeaders(ListAccessControlRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccessControlRulesRequest request;
    public ListAccessControlRulesRequest withRequest(openapisdk.models.shared.ListAccessControlRulesRequest request) {
        this.request = request;
        return this;
    }
}