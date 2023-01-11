package openapisdk.models.operations;



public class DeleteDomainAssociationResponse {
    public Object badRequestException;
    public DeleteDomainAssociationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteDomainAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDomainAssociationResult deleteDomainAssociationResult;
    public DeleteDomainAssociationResponse withDeleteDomainAssociationResult(openapisdk.models.shared.DeleteDomainAssociationResult deleteDomainAssociationResult) {
        this.deleteDomainAssociationResult = deleteDomainAssociationResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public DeleteDomainAssociationResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public DeleteDomainAssociationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteDomainAssociationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDomainAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteDomainAssociationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}