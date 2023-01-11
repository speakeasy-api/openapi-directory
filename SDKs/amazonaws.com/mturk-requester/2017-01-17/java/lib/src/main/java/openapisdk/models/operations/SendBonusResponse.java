package openapisdk.models.operations;



public class SendBonusResponse {
    public String contentType;
    public SendBonusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public SendBonusResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public java.util.Map<String, Object> sendBonusResponse;
    public SendBonusResponse withSendBonusResponse(java.util.Map<String, Object> sendBonusResponse) {
        this.sendBonusResponse = sendBonusResponse;
        return this;
    }
    public Object serviceFault;
    public SendBonusResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public SendBonusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}