package openapisdk.models.operations;



public class PostDeleteAlarmsResponse {
    public byte[] body;
    public PostDeleteAlarmsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteAlarmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteAlarmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}