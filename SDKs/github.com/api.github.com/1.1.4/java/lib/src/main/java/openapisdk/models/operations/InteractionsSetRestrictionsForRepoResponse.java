package openapisdk.models.operations;



public class InteractionsSetRestrictionsForRepoResponse {
    public String contentType;
    public InteractionsSetRestrictionsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InteractionsSetRestrictionsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse;
    public InteractionsSetRestrictionsForRepoResponse withInteractionLimitResponse(openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse) {
        this.interactionLimitResponse = interactionLimitResponse;
        return this;
    }
}