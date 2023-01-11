package openapisdk.models.operations;



public class InteractionsGetRestrictionsForOrgResponse {
    public String contentType;
    public InteractionsGetRestrictionsForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InteractionsGetRestrictionsForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse;
    public InteractionsGetRestrictionsForOrgResponse withInteractionLimitResponse(openapisdk.models.shared.InteractionLimitResponse interactionLimitResponse) {
        this.interactionLimitResponse = interactionLimitResponse;
        return this;
    }
}