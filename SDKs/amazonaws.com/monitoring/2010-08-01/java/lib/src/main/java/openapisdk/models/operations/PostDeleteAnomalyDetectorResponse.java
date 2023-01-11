package openapisdk.models.operations;



public class PostDeleteAnomalyDetectorResponse {
    public byte[] body;
    public PostDeleteAnomalyDetectorResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}