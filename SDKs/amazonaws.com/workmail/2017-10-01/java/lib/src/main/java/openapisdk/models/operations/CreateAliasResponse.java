package openapisdk.models.operations;



public class CreateAliasResponse {
    public String contentType;
    public CreateAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createAliasResponse;
    public CreateAliasResponse withCreateAliasResponse(java.util.Map<String, Object> createAliasResponse) {
        this.createAliasResponse = createAliasResponse;
        return this;
    }
    public Object emailAddressInUseException;
    public CreateAliasResponse withEmailAddressInUseException(Object emailAddressInUseException) {
        this.emailAddressInUseException = emailAddressInUseException;
        return this;
    }
    public Object entityNotFoundException;
    public CreateAliasResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public CreateAliasResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public CreateAliasResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateAliasResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object mailDomainNotFoundException;
    public CreateAliasResponse withMailDomainNotFoundException(Object mailDomainNotFoundException) {
        this.mailDomainNotFoundException = mailDomainNotFoundException;
        return this;
    }
    public Object mailDomainStateException;
    public CreateAliasResponse withMailDomainStateException(Object mailDomainStateException) {
        this.mailDomainStateException = mailDomainStateException;
        return this;
    }
    public Object organizationNotFoundException;
    public CreateAliasResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public CreateAliasResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public CreateAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}