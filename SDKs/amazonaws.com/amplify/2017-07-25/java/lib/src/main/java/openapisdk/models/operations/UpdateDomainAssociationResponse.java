package openapisdk.models.operations;



public class UpdateDomainAssociationResponse {
    public Object badRequestException;
    public UpdateDomainAssociationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateDomainAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependentServiceFailureException;
    public UpdateDomainAssociationResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public UpdateDomainAssociationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateDomainAssociationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDomainAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateDomainAssociationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateDomainAssociationResult updateDomainAssociationResult;
    public UpdateDomainAssociationResponse withUpdateDomainAssociationResult(openapisdk.models.shared.UpdateDomainAssociationResult updateDomainAssociationResult) {
        this.updateDomainAssociationResult = updateDomainAssociationResult;
        return this;
    }
}