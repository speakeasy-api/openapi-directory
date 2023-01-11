package openapisdk.models.operations;



public class GetAccessControlEffectResponse {
    public String contentType;
    public GetAccessControlEffectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetAccessControlEffectResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetAccessControlEffectResponse getAccessControlEffectResponse;
    public GetAccessControlEffectResponse withGetAccessControlEffectResponse(openapisdk.models.shared.GetAccessControlEffectResponse getAccessControlEffectResponse) {
        this.getAccessControlEffectResponse = getAccessControlEffectResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetAccessControlEffectResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public GetAccessControlEffectResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public GetAccessControlEffectResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public GetAccessControlEffectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}