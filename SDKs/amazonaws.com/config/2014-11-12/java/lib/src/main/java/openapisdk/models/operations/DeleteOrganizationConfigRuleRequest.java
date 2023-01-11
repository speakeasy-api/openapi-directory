package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationConfigRuleRequest {
    public DeleteOrganizationConfigRuleHeaders headers;
    public DeleteOrganizationConfigRuleRequest withHeaders(DeleteOrganizationConfigRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteOrganizationConfigRuleRequest request;
    public DeleteOrganizationConfigRuleRequest withRequest(openapisdk.models.shared.DeleteOrganizationConfigRuleRequest request) {
        this.request = request;
        return this;
    }
}