package openapisdk.models.operations;



public class GetRegistryPolicyResponse {
    public String contentType;
    public GetRegistryPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRegistryPolicyResponse getRegistryPolicyResponse;
    public GetRegistryPolicyResponse withGetRegistryPolicyResponse(openapisdk.models.shared.GetRegistryPolicyResponse getRegistryPolicyResponse) {
        this.getRegistryPolicyResponse = getRegistryPolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetRegistryPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object registryPolicyNotFoundException;
    public GetRegistryPolicyResponse withRegistryPolicyNotFoundException(Object registryPolicyNotFoundException) {
        this.registryPolicyNotFoundException = registryPolicyNotFoundException;
        return this;
    }
    public Object serverException;
    public GetRegistryPolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetRegistryPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}