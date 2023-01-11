package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigRuleDetailedStatusRequest {
    public GetOrganizationConfigRuleDetailedStatusQueryParams queryParams;
    public GetOrganizationConfigRuleDetailedStatusRequest withQueryParams(GetOrganizationConfigRuleDetailedStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrganizationConfigRuleDetailedStatusHeaders headers;
    public GetOrganizationConfigRuleDetailedStatusRequest withHeaders(GetOrganizationConfigRuleDetailedStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOrganizationConfigRuleDetailedStatusRequest request;
    public GetOrganizationConfigRuleDetailedStatusRequest withRequest(openapisdk.models.shared.GetOrganizationConfigRuleDetailedStatusRequest request) {
        this.request = request;
        return this;
    }
}