package openapisdk.models.operations;



public class DisableAwsOrganizationsAccessResponse {
    public String contentType;
    public DisableAwsOrganizationsAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableAWSOrganizationsAccessOutput;
    public DisableAwsOrganizationsAccessResponse withDisableAwsOrganizationsAccessOutput(java.util.Map<String, Object> disableAWSOrganizationsAccessOutput) {
        this.disableAWSOrganizationsAccessOutput = disableAWSOrganizationsAccessOutput;
        return this;
    }
    public Object invalidStateException;
    public DisableAwsOrganizationsAccessResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public DisableAwsOrganizationsAccessResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableAwsOrganizationsAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableAwsOrganizationsAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}