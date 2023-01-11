package openapisdk.models.operations;



public class PostGetMetricStatisticsResponse {
    public byte[] body;
    public PostGetMetricStatisticsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetMetricStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetMetricStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}