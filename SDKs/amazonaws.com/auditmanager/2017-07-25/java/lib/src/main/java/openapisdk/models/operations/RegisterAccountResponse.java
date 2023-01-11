package openapisdk.models.operations;



public class RegisterAccountResponse {
    public Object accessDeniedException;
    public RegisterAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RegisterAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RegisterAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.RegisterAccountResponse registerAccountResponse;
    public RegisterAccountResponse withRegisterAccountResponse(openapisdk.models.shared.RegisterAccountResponse registerAccountResponse) {
        this.registerAccountResponse = registerAccountResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}