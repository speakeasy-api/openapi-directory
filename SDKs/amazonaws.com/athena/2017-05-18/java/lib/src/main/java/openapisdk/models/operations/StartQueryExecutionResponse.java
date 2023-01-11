package openapisdk.models.operations;



public class StartQueryExecutionResponse {
    public String contentType;
    public StartQueryExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartQueryExecutionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartQueryExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.StartQueryExecutionOutput startQueryExecutionOutput;
    public StartQueryExecutionResponse withStartQueryExecutionOutput(openapisdk.models.shared.StartQueryExecutionOutput startQueryExecutionOutput) {
        this.startQueryExecutionOutput = startQueryExecutionOutput;
        return this;
    }
    public Long statusCode;
    public StartQueryExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartQueryExecutionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}