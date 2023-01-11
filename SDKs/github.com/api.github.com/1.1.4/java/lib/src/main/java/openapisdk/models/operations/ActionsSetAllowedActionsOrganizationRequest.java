package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetAllowedActionsOrganizationRequest {
    public ActionsSetAllowedActionsOrganizationPathParams pathParams;
    public ActionsSetAllowedActionsOrganizationRequest withPathParams(ActionsSetAllowedActionsOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelectedActions request;
    public ActionsSetAllowedActionsOrganizationRequest withRequest(openapisdk.models.shared.SelectedActions request) {
        this.request = request;
        return this;
    }
}