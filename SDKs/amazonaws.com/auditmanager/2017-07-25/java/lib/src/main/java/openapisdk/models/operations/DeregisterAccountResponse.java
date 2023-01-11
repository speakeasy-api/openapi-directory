package openapisdk.models.operations;



public class DeregisterAccountResponse {
    public Object accessDeniedException;
    public DeregisterAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeregisterAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeregisterAccountResponse deregisterAccountResponse;
    public DeregisterAccountResponse withDeregisterAccountResponse(openapisdk.models.shared.DeregisterAccountResponse deregisterAccountResponse) {
        this.deregisterAccountResponse = deregisterAccountResponse;
        return this;
    }
    public Object internalServerException;
    public DeregisterAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}