package openapisdk.models.operations;



public class CreateDomainAssociationResponse {
    public Object badRequestException;
    public CreateDomainAssociationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateDomainAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDomainAssociationResult createDomainAssociationResult;
    public CreateDomainAssociationResponse withCreateDomainAssociationResult(openapisdk.models.shared.CreateDomainAssociationResult createDomainAssociationResult) {
        this.createDomainAssociationResult = createDomainAssociationResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public CreateDomainAssociationResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public CreateDomainAssociationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateDomainAssociationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateDomainAssociationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDomainAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateDomainAssociationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}