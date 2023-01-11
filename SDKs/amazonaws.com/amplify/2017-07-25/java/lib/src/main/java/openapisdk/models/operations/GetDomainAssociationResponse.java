package openapisdk.models.operations;



public class GetDomainAssociationResponse {
    public Object badRequestException;
    public GetDomainAssociationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDomainAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainAssociationResult getDomainAssociationResult;
    public GetDomainAssociationResponse withGetDomainAssociationResult(openapisdk.models.shared.GetDomainAssociationResult getDomainAssociationResult) {
        this.getDomainAssociationResult = getDomainAssociationResult;
        return this;
    }
    public Object internalFailureException;
    public GetDomainAssociationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetDomainAssociationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDomainAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetDomainAssociationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}