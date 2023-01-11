package openapisdk.models.operations;



public class InteractionsGetRestrictionsForAuthenticatedUserResponse {
    public String contentType;
    public InteractionsGetRestrictionsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InteractionsGetRestrictionsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse;
    public InteractionsGetRestrictionsForAuthenticatedUserResponse withInteractionLimitResponse(openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse) {
        this.interactionLimitResponse = interactionLimitResponse;
        return this;
    }
}