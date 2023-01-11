package openapisdk.models.operations;



public class PostGetMetricDataResponse {
    public byte[] body;
    public PostGetMetricDataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}