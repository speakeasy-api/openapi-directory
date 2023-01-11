package openapisdk.models.operations;



public class ListPipelinesResponse {
    public String contentType;
    public ListPipelinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPipelinesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPipelinesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPipelinesResponse listPipelinesResponse;
    public ListPipelinesResponse withListPipelinesResponse(openapisdk.models.shared.ListPipelinesResponse listPipelinesResponse) {
        this.listPipelinesResponse = listPipelinesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPipelinesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPipelinesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}