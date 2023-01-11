package openapisdk.models.operations;



public class GetMobileDeviceAccessEffectResponse {
    public String contentType;
    public GetMobileDeviceAccessEffectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMobileDeviceAccessEffectResponse getMobileDeviceAccessEffectResponse;
    public GetMobileDeviceAccessEffectResponse withGetMobileDeviceAccessEffectResponse(openapisdk.models.shared.GetMobileDeviceAccessEffectResponse getMobileDeviceAccessEffectResponse) {
        this.getMobileDeviceAccessEffectResponse = getMobileDeviceAccessEffectResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetMobileDeviceAccessEffectResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public GetMobileDeviceAccessEffectResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public GetMobileDeviceAccessEffectResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public GetMobileDeviceAccessEffectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}