package openapisdk.models.operations;



public class AdminListUserAuthEventsResponse {
    public openapisdk.models.shared.AdminListUserAuthEventsResponse adminListUserAuthEventsResponse;
    public AdminListUserAuthEventsResponse withAdminListUserAuthEventsResponse(openapisdk.models.shared.AdminListUserAuthEventsResponse adminListUserAuthEventsResponse) {
        this.adminListUserAuthEventsResponse = adminListUserAuthEventsResponse;
        return this;
    }
    public String contentType;
    public AdminListUserAuthEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminListUserAuthEventsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminListUserAuthEventsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminListUserAuthEventsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminListUserAuthEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminListUserAuthEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminListUserAuthEventsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminListUserAuthEventsResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
    public Object userPoolAddOnNotEnabledException;
    public AdminListUserAuthEventsResponse withUserPoolAddOnNotEnabledException(Object userPoolAddOnNotEnabledException) {
        this.userPoolAddOnNotEnabledException = userPoolAddOnNotEnabledException;
        return this;
    }
}