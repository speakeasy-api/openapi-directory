package openapisdk.models.operations;



public class InteractionsSetRestrictionsForOrgResponse {
    public String contentType;
    public InteractionsSetRestrictionsForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InteractionsSetRestrictionsForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse;
    public InteractionsSetRestrictionsForOrgResponse withInteractionLimitResponse(openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse) {
        this.interactionLimitResponse = interactionLimitResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public InteractionsSetRestrictionsForOrgResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}