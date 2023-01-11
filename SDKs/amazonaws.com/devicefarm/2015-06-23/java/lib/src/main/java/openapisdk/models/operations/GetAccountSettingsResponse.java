package openapisdk.models.operations;



public class GetAccountSettingsResponse {
    public Object argumentException;
    public GetAccountSettingsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountSettingsResult getAccountSettingsResult;
    public GetAccountSettingsResponse withGetAccountSettingsResult(openapisdk.models.shared.GetAccountSettingsResult getAccountSettingsResult) {
        this.getAccountSettingsResult = getAccountSettingsResult;
        return this;
    }
    public Object limitExceededException;
    public GetAccountSettingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetAccountSettingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetAccountSettingsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}