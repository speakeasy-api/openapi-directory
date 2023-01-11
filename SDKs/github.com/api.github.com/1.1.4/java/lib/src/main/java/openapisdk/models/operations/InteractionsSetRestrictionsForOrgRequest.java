package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsSetRestrictionsForOrgRequest {
    public InteractionsSetRestrictionsForOrgPathParams pathParams;
    public InteractionsSetRestrictionsForOrgRequest withPathParams(InteractionsSetRestrictionsForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InteractionLimit request;
    public InteractionsSetRestrictionsForOrgRequest withRequest(openapisdk.models.shared.InteractionLimit request) {
        this.request = request;
        return this;
    }
}