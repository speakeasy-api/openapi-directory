package openapisdk.models.operations;



public class PostPutMetricAlarmResponse {
    public byte[] body;
    public PostPutMetricAlarmResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutMetricAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutMetricAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}