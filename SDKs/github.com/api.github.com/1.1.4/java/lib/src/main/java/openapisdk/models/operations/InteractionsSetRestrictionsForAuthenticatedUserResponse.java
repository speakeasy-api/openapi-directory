package openapisdk.models.operations;



public class InteractionsSetRestrictionsForAuthenticatedUserResponse {
    public String contentType;
    public InteractionsSetRestrictionsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InteractionsSetRestrictionsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse;
    public InteractionsSetRestrictionsForAuthenticatedUserResponse withInteractionLimitResponse(openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse) {
        this.interactionLimitResponse = interactionLimitResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public InteractionsSetRestrictionsForAuthenticatedUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}