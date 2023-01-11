package openapisdk.models.operations;



public class PostGetPredictiveScalingForecastResponse {
    public byte[] body;
    public PostGetPredictiveScalingForecastResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetPredictiveScalingForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetPredictiveScalingForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}