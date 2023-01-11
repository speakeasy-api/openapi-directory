package openapisdk.models.operations;



public class SendTaskSuccessResponse {
    public String contentType;
    public SendTaskSuccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidOutput;
    public SendTaskSuccessResponse withInvalidOutput(Object invalidOutput) {
        this.invalidOutput = invalidOutput;
        return this;
    }
    public Object invalidToken;
    public SendTaskSuccessResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public java.util.Map<String, Object> sendTaskSuccessOutput;
    public SendTaskSuccessResponse withSendTaskSuccessOutput(java.util.Map<String, Object> sendTaskSuccessOutput) {
        this.sendTaskSuccessOutput = sendTaskSuccessOutput;
        return this;
    }
    public Long statusCode;
    public SendTaskSuccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskDoesNotExist;
    public SendTaskSuccessResponse withTaskDoesNotExist(Object taskDoesNotExist) {
        this.taskDoesNotExist = taskDoesNotExist;
        return this;
    }
    public Object taskTimedOut;
    public SendTaskSuccessResponse withTaskTimedOut(Object taskTimedOut) {
        this.taskTimedOut = taskTimedOut;
        return this;
    }
}