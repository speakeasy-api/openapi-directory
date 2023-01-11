package openapisdk.models.operations;



public class GetResourcePoliciesResponse {
    public String contentType;
    public GetResourcePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourcePoliciesResponse getResourcePoliciesResponse;
    public GetResourcePoliciesResponse withGetResourcePoliciesResponse(openapisdk.models.shared.GetResourcePoliciesResponse getResourcePoliciesResponse) {
        this.getResourcePoliciesResponse = getResourcePoliciesResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public GetResourcePoliciesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetResourcePoliciesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public GetResourcePoliciesResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object resourceArnNotFoundException;
    public GetResourcePoliciesResponse withResourceArnNotFoundException(Object resourceArnNotFoundException) {
        this.resourceArnNotFoundException = resourceArnNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public GetResourcePoliciesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetResourcePoliciesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetResourcePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}