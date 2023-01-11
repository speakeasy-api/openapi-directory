package openapisdk.models.operations;



public class PostDescribeAlarmsForMetricResponse {
    public byte[] body;
    public PostDescribeAlarmsForMetricResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeAlarmsForMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeAlarmsForMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}