package openapisdk.models.operations;



public class GetPreparedStatementResponse {
    public String contentType;
    public GetPreparedStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPreparedStatementOutput getPreparedStatementOutput;
    public GetPreparedStatementResponse withGetPreparedStatementOutput(openapisdk.models.shared.GetPreparedStatementOutput getPreparedStatementOutput) {
        this.getPreparedStatementOutput = getPreparedStatementOutput;
        return this;
    }
    public Object internalServerException;
    public GetPreparedStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetPreparedStatementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPreparedStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPreparedStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}