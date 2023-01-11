package openapisdk.models.operations;



public class CreateWebLoginTokenResponse {
    public Object accessDeniedException;
    public CreateWebLoginTokenResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateWebLoginTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWebLoginTokenResponse createWebLoginTokenResponse;
    public CreateWebLoginTokenResponse withCreateWebLoginTokenResponse(openapisdk.models.shared.CreateWebLoginTokenResponse createWebLoginTokenResponse) {
        this.createWebLoginTokenResponse = createWebLoginTokenResponse;
        return this;
    }
    public Object internalServerException;
    public CreateWebLoginTokenResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateWebLoginTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateWebLoginTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateWebLoginTokenResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}