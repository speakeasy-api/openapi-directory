package openapisdk.models.operations;



public class PutResourcePolicyResponse {
    public String contentType;
    public PutResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public PutResourcePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.PutResourcePolicyOutput putResourcePolicyOutput;
    public PutResourcePolicyResponse withPutResourcePolicyOutput(openapisdk.models.shared.PutResourcePolicyOutput putResourcePolicyOutput) {
        this.putResourcePolicyOutput = putResourcePolicyOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public PutResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}