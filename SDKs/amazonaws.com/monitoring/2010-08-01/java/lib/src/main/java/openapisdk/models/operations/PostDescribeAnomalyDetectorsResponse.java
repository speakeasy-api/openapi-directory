package openapisdk.models.operations;



public class PostDescribeAnomalyDetectorsResponse {
    public byte[] body;
    public PostDescribeAnomalyDetectorsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeAnomalyDetectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeAnomalyDetectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}