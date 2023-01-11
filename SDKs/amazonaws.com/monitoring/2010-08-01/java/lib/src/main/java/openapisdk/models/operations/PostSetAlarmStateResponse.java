package openapisdk.models.operations;



public class PostSetAlarmStateResponse {
    public byte[] body;
    public PostSetAlarmStateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetAlarmStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetAlarmStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}