package openapisdk.models.operations;



public class ListInstanceProfilesResponse {
    public Object argumentException;
    public ListInstanceProfilesResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListInstanceProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListInstanceProfilesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListInstanceProfilesResult listInstanceProfilesResult;
    public ListInstanceProfilesResponse withListInstanceProfilesResult(openapisdk.models.shared.ListInstanceProfilesResult listInstanceProfilesResult) {
        this.listInstanceProfilesResult = listInstanceProfilesResult;
        return this;
    }
    public Object notFoundException;
    public ListInstanceProfilesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListInstanceProfilesResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListInstanceProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}