package openapisdk.models.operations;



public class GetSetAlarmStateResponse {
    public byte[] body;
    public GetSetAlarmStateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetAlarmStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetAlarmStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}