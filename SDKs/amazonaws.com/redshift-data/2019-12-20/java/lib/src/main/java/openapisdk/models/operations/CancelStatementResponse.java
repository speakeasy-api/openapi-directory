package openapisdk.models.operations;



public class CancelStatementResponse {
    public openapisdk.models.shared.CancelStatementResponse cancelStatementResponse;
    public CancelStatementResponse withCancelStatementResponse(openapisdk.models.shared.CancelStatementResponse cancelStatementResponse) {
        this.cancelStatementResponse = cancelStatementResponse;
        return this;
    }
    public String contentType;
    public CancelStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CancelStatementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}