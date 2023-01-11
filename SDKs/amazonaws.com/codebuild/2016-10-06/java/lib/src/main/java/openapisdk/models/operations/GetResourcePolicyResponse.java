package openapisdk.models.operations;



public class GetResourcePolicyResponse {
    public String contentType;
    public GetResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourcePolicyOutput getResourcePolicyOutput;
    public GetResourcePolicyResponse withGetResourcePolicyOutput(openapisdk.models.shared.GetResourcePolicyOutput getResourcePolicyOutput) {
        this.getResourcePolicyOutput = getResourcePolicyOutput;
        return this;
    }
    public Object invalidInputException;
    public GetResourcePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}