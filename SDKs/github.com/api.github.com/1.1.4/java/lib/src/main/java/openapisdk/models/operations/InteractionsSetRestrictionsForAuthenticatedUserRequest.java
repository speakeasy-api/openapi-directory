package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsSetRestrictionsForAuthenticatedUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InteractionLimit request;
    public InteractionsSetRestrictionsForAuthenticatedUserRequest withRequest(openapisdk.models.shared.InteractionLimit request) {
        this.request = request;
        return this;
    }
}