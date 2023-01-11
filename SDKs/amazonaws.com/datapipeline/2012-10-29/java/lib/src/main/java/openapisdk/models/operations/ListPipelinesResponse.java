package openapisdk.models.operations;



public class ListPipelinesResponse {
    public String contentType;
    public ListPipelinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListPipelinesResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ListPipelinesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPipelinesOutput listPipelinesOutput;
    public ListPipelinesResponse withListPipelinesOutput(openapisdk.models.shared.ListPipelinesOutput listPipelinesOutput) {
        this.listPipelinesOutput = listPipelinesOutput;
        return this;
    }
    public Long statusCode;
    public ListPipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}