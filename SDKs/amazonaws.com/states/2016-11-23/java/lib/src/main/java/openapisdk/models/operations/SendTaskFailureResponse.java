package openapisdk.models.operations;



public class SendTaskFailureResponse {
    public String contentType;
    public SendTaskFailureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidToken;
    public SendTaskFailureResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public java.util.Map<String, Object> sendTaskFailureOutput;
    public SendTaskFailureResponse withSendTaskFailureOutput(java.util.Map<String, Object> sendTaskFailureOutput) {
        this.sendTaskFailureOutput = sendTaskFailureOutput;
        return this;
    }
    public Long statusCode;
    public SendTaskFailureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskDoesNotExist;
    public SendTaskFailureResponse withTaskDoesNotExist(Object taskDoesNotExist) {
        this.taskDoesNotExist = taskDoesNotExist;
        return this;
    }
    public Object taskTimedOut;
    public SendTaskFailureResponse withTaskTimedOut(Object taskTimedOut) {
        this.taskTimedOut = taskTimedOut;
        return this;
    }
}