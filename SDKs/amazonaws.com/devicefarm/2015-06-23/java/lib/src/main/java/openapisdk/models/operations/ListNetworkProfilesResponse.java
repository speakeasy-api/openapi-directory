package openapisdk.models.operations;



public class ListNetworkProfilesResponse {
    public Object argumentException;
    public ListNetworkProfilesResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListNetworkProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListNetworkProfilesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListNetworkProfilesResult listNetworkProfilesResult;
    public ListNetworkProfilesResponse withListNetworkProfilesResult(openapisdk.models.shared.ListNetworkProfilesResult listNetworkProfilesResult) {
        this.listNetworkProfilesResult = listNetworkProfilesResult;
        return this;
    }
    public Object notFoundException;
    public ListNetworkProfilesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListNetworkProfilesResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListNetworkProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}