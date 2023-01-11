package openapisdk.models.operations;



public class EnableSharingWithAwsOrganizationResponse {
    public String contentType;
    public EnableSharingWithAwsOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnableSharingWithAwsOrganizationResponse enableSharingWithAwsOrganizationResponse;
    public EnableSharingWithAwsOrganizationResponse withEnableSharingWithAwsOrganizationResponse(openapisdk.models.shared.EnableSharingWithAwsOrganizationResponse enableSharingWithAwsOrganizationResponse) {
        this.enableSharingWithAwsOrganizationResponse = enableSharingWithAwsOrganizationResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public EnableSharingWithAwsOrganizationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public EnableSharingWithAwsOrganizationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public EnableSharingWithAwsOrganizationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public EnableSharingWithAwsOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}