package openapisdk.models.operations;



public class ListAppsResponse {
    public Object badRequestException;
    public ListAppsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAppsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListAppsResult listAppsResult;
    public ListAppsResponse withListAppsResult(openapisdk.models.shared.ListAppsResult listAppsResult) {
        this.listAppsResult = listAppsResult;
        return this;
    }
    public Long statusCode;
    public ListAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListAppsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}