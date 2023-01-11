package openapisdk.models.operations;



public class GetQueryExecutionResponse {
    public String contentType;
    public GetQueryExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetQueryExecutionOutput getQueryExecutionOutput;
    public GetQueryExecutionResponse withGetQueryExecutionOutput(openapisdk.models.shared.GetQueryExecutionOutput getQueryExecutionOutput) {
        this.getQueryExecutionOutput = getQueryExecutionOutput;
        return this;
    }
    public Object internalServerException;
    public GetQueryExecutionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetQueryExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetQueryExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}