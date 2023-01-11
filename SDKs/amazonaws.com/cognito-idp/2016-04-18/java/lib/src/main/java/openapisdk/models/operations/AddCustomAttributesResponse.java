package openapisdk.models.operations;



public class AddCustomAttributesResponse {
    public java.util.Map<String, Object> addCustomAttributesResponse;
    public AddCustomAttributesResponse withAddCustomAttributesResponse(java.util.Map<String, Object> addCustomAttributesResponse) {
        this.addCustomAttributesResponse = addCustomAttributesResponse;
        return this;
    }
    public String contentType;
    public AddCustomAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AddCustomAttributesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AddCustomAttributesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AddCustomAttributesResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddCustomAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddCustomAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AddCustomAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userImportInProgressException;
    public AddCustomAttributesResponse withUserImportInProgressException(Object userImportInProgressException) {
        this.userImportInProgressException = userImportInProgressException;
        return this;
    }
}