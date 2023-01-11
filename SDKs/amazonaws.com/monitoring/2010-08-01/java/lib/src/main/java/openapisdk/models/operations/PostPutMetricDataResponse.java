package openapisdk.models.operations;



public class PostPutMetricDataResponse {
    public byte[] body;
    public PostPutMetricDataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}