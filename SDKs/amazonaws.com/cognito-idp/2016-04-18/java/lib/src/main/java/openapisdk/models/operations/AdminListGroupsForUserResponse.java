package openapisdk.models.operations;



public class AdminListGroupsForUserResponse {
    public openapisdk.models.shared.AdminListGroupsForUserResponse adminListGroupsForUserResponse;
    public AdminListGroupsForUserResponse withAdminListGroupsForUserResponse(openapisdk.models.shared.AdminListGroupsForUserResponse adminListGroupsForUserResponse) {
        this.adminListGroupsForUserResponse = adminListGroupsForUserResponse;
        return this;
    }
    public String contentType;
    public AdminListGroupsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminListGroupsForUserResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminListGroupsForUserResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminListGroupsForUserResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminListGroupsForUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminListGroupsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminListGroupsForUserResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminListGroupsForUserResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}