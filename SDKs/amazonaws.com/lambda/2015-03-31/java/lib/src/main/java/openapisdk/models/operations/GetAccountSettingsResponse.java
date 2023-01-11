package openapisdk.models.operations;



public class GetAccountSettingsResponse {
    public String contentType;
    public GetAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountSettingsResponse getAccountSettingsResponse;
    public GetAccountSettingsResponse withGetAccountSettingsResponse(openapisdk.models.shared.GetAccountSettingsResponse getAccountSettingsResponse) {
        this.getAccountSettingsResponse = getAccountSettingsResponse;
        return this;
    }
    public Object serviceException;
    public GetAccountSettingsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAccountSettingsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}