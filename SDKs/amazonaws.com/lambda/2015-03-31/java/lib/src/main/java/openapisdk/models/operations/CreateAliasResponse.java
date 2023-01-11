package openapisdk.models.operations;



public class CreateAliasResponse {
    public openapisdk.models.shared.AliasConfiguration aliasConfiguration;
    public CreateAliasResponse withAliasConfiguration(openapisdk.models.shared.AliasConfiguration aliasConfiguration) {
        this.aliasConfiguration = aliasConfiguration;
        return this;
    }
    public String contentType;
    public CreateAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateAliasResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public CreateAliasResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public CreateAliasResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateAliasResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}