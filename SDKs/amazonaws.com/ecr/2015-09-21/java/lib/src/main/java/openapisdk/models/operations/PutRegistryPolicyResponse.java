package openapisdk.models.operations;



public class PutRegistryPolicyResponse {
    public String contentType;
    public PutRegistryPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutRegistryPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutRegistryPolicyResponse putRegistryPolicyResponse;
    public PutRegistryPolicyResponse withPutRegistryPolicyResponse(openapisdk.models.shared.PutRegistryPolicyResponse putRegistryPolicyResponse) {
        this.putRegistryPolicyResponse = putRegistryPolicyResponse;
        return this;
    }
    public Object serverException;
    public PutRegistryPolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutRegistryPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}