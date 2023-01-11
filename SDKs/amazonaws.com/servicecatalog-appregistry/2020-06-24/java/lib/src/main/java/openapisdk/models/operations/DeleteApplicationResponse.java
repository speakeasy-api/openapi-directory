package openapisdk.models.operations;



public class DeleteApplicationResponse {
    public String contentType;
    public DeleteApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApplicationResponse deleteApplicationResponse;
    public DeleteApplicationResponse withDeleteApplicationResponse(openapisdk.models.shared.DeleteApplicationResponse deleteApplicationResponse) {
        this.deleteApplicationResponse = deleteApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteApplicationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}