package openapisdk.models.operations;



public class GetDeleteAlarmsResponse {
    public byte[] body;
    public GetDeleteAlarmsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteAlarmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteAlarmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}