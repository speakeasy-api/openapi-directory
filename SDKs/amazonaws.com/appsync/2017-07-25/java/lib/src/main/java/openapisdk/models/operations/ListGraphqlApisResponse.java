package openapisdk.models.operations;



public class ListGraphqlApisResponse {
    public Object badRequestException;
    public ListGraphqlApisResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListGraphqlApisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListGraphqlApisResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListGraphqlApisResponse listGraphqlApisResponse;
    public ListGraphqlApisResponse withListGraphqlApisResponse(openapisdk.models.shared.ListGraphqlApisResponse listGraphqlApisResponse) {
        this.listGraphqlApisResponse = listGraphqlApisResponse;
        return this;
    }
    public Long statusCode;
    public ListGraphqlApisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListGraphqlApisResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}