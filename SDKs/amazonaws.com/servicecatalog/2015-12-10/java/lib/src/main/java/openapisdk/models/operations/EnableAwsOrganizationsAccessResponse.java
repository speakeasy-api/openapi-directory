package openapisdk.models.operations;



public class EnableAwsOrganizationsAccessResponse {
    public String contentType;
    public EnableAwsOrganizationsAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableAWSOrganizationsAccessOutput;
    public EnableAwsOrganizationsAccessResponse withEnableAwsOrganizationsAccessOutput(java.util.Map<String, Object> enableAWSOrganizationsAccessOutput) {
        this.enableAWSOrganizationsAccessOutput = enableAWSOrganizationsAccessOutput;
        return this;
    }
    public Object invalidStateException;
    public EnableAwsOrganizationsAccessResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public EnableAwsOrganizationsAccessResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableAwsOrganizationsAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public EnableAwsOrganizationsAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}