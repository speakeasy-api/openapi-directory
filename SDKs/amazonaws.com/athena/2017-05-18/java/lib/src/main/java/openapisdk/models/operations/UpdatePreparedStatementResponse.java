package openapisdk.models.operations;



public class UpdatePreparedStatementResponse {
    public String contentType;
    public UpdatePreparedStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdatePreparedStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public UpdatePreparedStatementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePreparedStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePreparedStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updatePreparedStatementOutput;
    public UpdatePreparedStatementResponse withUpdatePreparedStatementOutput(java.util.Map<String, Object> updatePreparedStatementOutput) {
        this.updatePreparedStatementOutput = updatePreparedStatementOutput;
        return this;
    }
}