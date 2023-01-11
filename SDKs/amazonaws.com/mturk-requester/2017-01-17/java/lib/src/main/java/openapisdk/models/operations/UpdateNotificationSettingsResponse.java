package openapisdk.models.operations;



public class UpdateNotificationSettingsResponse {
    public String contentType;
    public UpdateNotificationSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public UpdateNotificationSettingsResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public UpdateNotificationSettingsResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public UpdateNotificationSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateNotificationSettingsResponse;
    public UpdateNotificationSettingsResponse withUpdateNotificationSettingsResponse(java.util.Map<String, Object> updateNotificationSettingsResponse) {
        this.updateNotificationSettingsResponse = updateNotificationSettingsResponse;
        return this;
    }
}