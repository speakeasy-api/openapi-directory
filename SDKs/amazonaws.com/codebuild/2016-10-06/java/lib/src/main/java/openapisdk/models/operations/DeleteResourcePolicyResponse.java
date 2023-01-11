package openapisdk.models.operations;



public class DeleteResourcePolicyResponse {
    public String contentType;
    public DeleteResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourcePolicyOutput;
    public DeleteResourcePolicyResponse withDeleteResourcePolicyOutput(java.util.Map<String, Object> deleteResourcePolicyOutput) {
        this.deleteResourcePolicyOutput = deleteResourcePolicyOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteResourcePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}