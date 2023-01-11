package openapisdk.models.operations;



public class ListBackendEnvironmentsResponse {
    public Object badRequestException;
    public ListBackendEnvironmentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListBackendEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListBackendEnvironmentsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListBackendEnvironmentsResult listBackendEnvironmentsResult;
    public ListBackendEnvironmentsResponse withListBackendEnvironmentsResult(openapisdk.models.shared.ListBackendEnvironmentsResult listBackendEnvironmentsResult) {
        this.listBackendEnvironmentsResult = listBackendEnvironmentsResult;
        return this;
    }
    public Long statusCode;
    public ListBackendEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListBackendEnvironmentsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}