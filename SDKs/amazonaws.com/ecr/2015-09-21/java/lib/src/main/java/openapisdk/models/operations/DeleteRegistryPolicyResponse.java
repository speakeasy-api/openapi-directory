package openapisdk.models.operations;



public class DeleteRegistryPolicyResponse {
    public String contentType;
    public DeleteRegistryPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRegistryPolicyResponse deleteRegistryPolicyResponse;
    public DeleteRegistryPolicyResponse withDeleteRegistryPolicyResponse(openapisdk.models.shared.DeleteRegistryPolicyResponse deleteRegistryPolicyResponse) {
        this.deleteRegistryPolicyResponse = deleteRegistryPolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRegistryPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object registryPolicyNotFoundException;
    public DeleteRegistryPolicyResponse withRegistryPolicyNotFoundException(Object registryPolicyNotFoundException) {
        this.registryPolicyNotFoundException = registryPolicyNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteRegistryPolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteRegistryPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}