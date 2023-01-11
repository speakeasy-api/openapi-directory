package openapisdk.models.operations;



public class GetAwsOrganizationsAccessStatusResponse {
    public String contentType;
    public GetAwsOrganizationsAccessStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAwsOrganizationsAccessStatusOutput getAWSOrganizationsAccessStatusOutput;
    public GetAwsOrganizationsAccessStatusResponse withGetAwsOrganizationsAccessStatusOutput(openapisdk.models.shared.GetAwsOrganizationsAccessStatusOutput getAWSOrganizationsAccessStatusOutput) {
        this.getAWSOrganizationsAccessStatusOutput = getAWSOrganizationsAccessStatusOutput;
        return this;
    }
    public Object operationNotSupportedException;
    public GetAwsOrganizationsAccessStatusResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAwsOrganizationsAccessStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAwsOrganizationsAccessStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}