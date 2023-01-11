package openapisdk.models.operations;



public class CreatePreparedStatementResponse {
    public String contentType;
    public CreatePreparedStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createPreparedStatementOutput;
    public CreatePreparedStatementResponse withCreatePreparedStatementOutput(java.util.Map<String, Object> createPreparedStatementOutput) {
        this.createPreparedStatementOutput = createPreparedStatementOutput;
        return this;
    }
    public Object internalServerException;
    public CreatePreparedStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreatePreparedStatementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreatePreparedStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}