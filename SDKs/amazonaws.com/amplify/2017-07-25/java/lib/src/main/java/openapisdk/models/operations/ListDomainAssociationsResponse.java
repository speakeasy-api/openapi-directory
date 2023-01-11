package openapisdk.models.operations;



public class ListDomainAssociationsResponse {
    public Object badRequestException;
    public ListDomainAssociationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDomainAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDomainAssociationsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListDomainAssociationsResult listDomainAssociationsResult;
    public ListDomainAssociationsResponse withListDomainAssociationsResult(openapisdk.models.shared.ListDomainAssociationsResult listDomainAssociationsResult) {
        this.listDomainAssociationsResult = listDomainAssociationsResult;
        return this;
    }
    public Long statusCode;
    public ListDomainAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListDomainAssociationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}