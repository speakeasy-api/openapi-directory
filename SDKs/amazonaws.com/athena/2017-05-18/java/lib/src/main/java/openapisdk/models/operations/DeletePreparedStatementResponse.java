package openapisdk.models.operations;



public class DeletePreparedStatementResponse {
    public String contentType;
    public DeletePreparedStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePreparedStatementOutput;
    public DeletePreparedStatementResponse withDeletePreparedStatementOutput(java.util.Map<String, Object> deletePreparedStatementOutput) {
        this.deletePreparedStatementOutput = deletePreparedStatementOutput;
        return this;
    }
    public Object internalServerException;
    public DeletePreparedStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DeletePreparedStatementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePreparedStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePreparedStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}