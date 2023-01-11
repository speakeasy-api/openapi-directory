package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetAllowedActionsEnterpriseRequest {
    public EnterpriseAdminSetAllowedActionsEnterprisePathParams pathParams;
    public EnterpriseAdminSetAllowedActionsEnterpriseRequest withPathParams(EnterpriseAdminSetAllowedActionsEnterprisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelectedActions request;
    public EnterpriseAdminSetAllowedActionsEnterpriseRequest withRequest(openapisdk.models.shared.SelectedActions request) {
        this.request = request;
        return this;
    }
}