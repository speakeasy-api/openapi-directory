package openapisdk.models.operations;



public class PostPutCompositeAlarmResponse {
    public byte[] body;
    public PostPutCompositeAlarmResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutCompositeAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutCompositeAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}