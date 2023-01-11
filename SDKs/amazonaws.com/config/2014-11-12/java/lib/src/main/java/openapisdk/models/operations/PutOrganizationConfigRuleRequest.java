package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrganizationConfigRuleRequest {
    public PutOrganizationConfigRuleHeaders headers;
    public PutOrganizationConfigRuleRequest withHeaders(PutOrganizationConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutOrganizationConfigRuleRequest request;
    public PutOrganizationConfigRuleRequest withRequest(openapisdk.models.shared.PutOrganizationConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}