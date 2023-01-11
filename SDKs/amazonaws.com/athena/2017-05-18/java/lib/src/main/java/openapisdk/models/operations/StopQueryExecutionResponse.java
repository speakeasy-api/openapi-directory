package openapisdk.models.operations;



public class StopQueryExecutionResponse {
    public String contentType;
    public StopQueryExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopQueryExecutionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopQueryExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public StopQueryExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopQueryExecutionOutput;
    public StopQueryExecutionResponse withStopQueryExecutionOutput(java.util.Map<String, Object> stopQueryExecutionOutput) {
        this.stopQueryExecutionOutput = stopQueryExecutionOutput;
        return this;
    }
}