package openapisdk.models.operations;



public class UnclaimDeviceResponse {
    public String contentType;
    public UnclaimDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UnclaimDeviceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UnclaimDeviceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UnclaimDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UnclaimDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnclaimDeviceResponse unclaimDeviceResponse;
    public UnclaimDeviceResponse withUnclaimDeviceResponse(openapisdk.models.shared.UnclaimDeviceResponse unclaimDeviceResponse) {
        this.unclaimDeviceResponse = unclaimDeviceResponse;
        return this;
    }
}