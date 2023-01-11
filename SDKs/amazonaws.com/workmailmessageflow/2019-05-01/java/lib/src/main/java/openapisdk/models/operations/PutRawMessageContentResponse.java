package openapisdk.models.operations;



public class PutRawMessageContentResponse {
    public String contentType;
    public PutRawMessageContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidContentLocation;
    public PutRawMessageContentResponse withInvalidContentLocation(Object invalidContentLocation) {
        this.invalidContentLocation = invalidContentLocation;
        return this;
    }
    public Object messageFrozen;
    public PutRawMessageContentResponse withMessageFrozen(Object messageFrozen) {
        this.messageFrozen = messageFrozen;
        return this;
    }
    public Object messageRejected;
    public PutRawMessageContentResponse withMessageRejected(Object messageRejected) {
        this.messageRejected = messageRejected;
        return this;
    }
    public java.util.Map<String, Object> putRawMessageContentResponse;
    public PutRawMessageContentResponse withPutRawMessageContentResponse(java.util.Map<String, Object> putRawMessageContentResponse) {
        this.putRawMessageContentResponse = putRawMessageContentResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRawMessageContentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutRawMessageContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}