package openapisdk.models.operations;



public class GetDeviceRegistrationResponse {
    public String contentType;
    public GetDeviceRegistrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceRegistrationResult getDeviceRegistrationResult;
    public GetDeviceRegistrationResponse withGetDeviceRegistrationResult(openapisdk.models.shared.GetDeviceRegistrationResult getDeviceRegistrationResult) {
        this.getDeviceRegistrationResult = getDeviceRegistrationResult;
        return this;
    }
    public Object internalServiceException;
    public GetDeviceRegistrationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Long statusCode;
    public GetDeviceRegistrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}