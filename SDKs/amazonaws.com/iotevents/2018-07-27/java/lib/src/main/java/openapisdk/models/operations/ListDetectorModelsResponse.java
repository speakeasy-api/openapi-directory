package openapisdk.models.operations;



public class ListDetectorModelsResponse {
    public String contentType;
    public ListDetectorModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDetectorModelsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDetectorModelsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDetectorModelsResponse listDetectorModelsResponse;
    public ListDetectorModelsResponse withListDetectorModelsResponse(openapisdk.models.shared.ListDetectorModelsResponse listDetectorModelsResponse) {
        this.listDetectorModelsResponse = listDetectorModelsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDetectorModelsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDetectorModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDetectorModelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}