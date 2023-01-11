package openapisdk.models.operations;



public class ListIndicesResponse {
    public String contentType;
    public ListIndicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListIndicesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListIndicesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListIndicesResponse listIndicesResponse;
    public ListIndicesResponse withListIndicesResponse(openapisdk.models.shared.ListIndicesResponse listIndicesResponse) {
        this.listIndicesResponse = listIndicesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListIndicesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListIndicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListIndicesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListIndicesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}