package openapisdk.models.operations;



public class SendTestEventNotificationResponse {
    public String contentType;
    public SendTestEventNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public SendTestEventNotificationResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public java.util.Map<String, Object> sendTestEventNotificationResponse;
    public SendTestEventNotificationResponse withSendTestEventNotificationResponse(java.util.Map<String, Object> sendTestEventNotificationResponse) {
        this.sendTestEventNotificationResponse = sendTestEventNotificationResponse;
        return this;
    }
    public Object serviceFault;
    public SendTestEventNotificationResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public SendTestEventNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}