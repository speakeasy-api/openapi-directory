package openapisdk.models.operations;



public class GetDeviceMethodsResponse {
    public String contentType;
    public GetDeviceMethodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceMethodsResponse getDeviceMethodsResponse;
    public GetDeviceMethodsResponse withGetDeviceMethodsResponse(openapisdk.models.shared.GetDeviceMethodsResponse getDeviceMethodsResponse) {
        this.getDeviceMethodsResponse = getDeviceMethodsResponse;
        return this;
    }
    public Object internalFailureException;
    public GetDeviceMethodsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetDeviceMethodsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDeviceMethodsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeviceMethodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}