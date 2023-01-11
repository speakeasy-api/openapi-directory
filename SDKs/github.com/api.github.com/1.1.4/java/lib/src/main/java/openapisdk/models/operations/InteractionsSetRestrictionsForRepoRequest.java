package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsSetRestrictionsForRepoRequest {
    public InteractionsSetRestrictionsForRepoPathParams pathParams;
    public InteractionsSetRestrictionsForRepoRequest withPathParams(InteractionsSetRestrictionsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InteractionLimit request;
    public InteractionsSetRestrictionsForRepoRequest withRequest(openapisdk.models.shared.InteractionLimit request) {
        this.request = request;
        return this;
    }
}