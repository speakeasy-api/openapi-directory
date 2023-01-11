package openapisdk.models.operations;



public class ListDetectorModelVersionsResponse {
    public String contentType;
    public ListDetectorModelVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDetectorModelVersionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDetectorModelVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDetectorModelVersionsResponse listDetectorModelVersionsResponse;
    public ListDetectorModelVersionsResponse withListDetectorModelVersionsResponse(openapisdk.models.shared.ListDetectorModelVersionsResponse listDetectorModelVersionsResponse) {
        this.listDetectorModelVersionsResponse = listDetectorModelVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDetectorModelVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDetectorModelVersionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDetectorModelVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDetectorModelVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}