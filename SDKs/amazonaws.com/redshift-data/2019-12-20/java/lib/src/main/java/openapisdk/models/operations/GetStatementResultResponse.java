package openapisdk.models.operations;



public class GetStatementResultResponse {
    public String contentType;
    public GetStatementResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStatementResultResponse getStatementResultResponse;
    public GetStatementResultResponse withGetStatementResultResponse(openapisdk.models.shared.GetStatementResultResponse getStatementResultResponse) {
        this.getStatementResultResponse = getStatementResultResponse;
        return this;
    }
    public Object internalServerException;
    public GetStatementResultResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStatementResultResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetStatementResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetStatementResultResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}