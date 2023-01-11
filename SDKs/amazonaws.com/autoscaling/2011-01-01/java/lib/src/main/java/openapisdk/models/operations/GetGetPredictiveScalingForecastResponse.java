package openapisdk.models.operations;



public class GetGetPredictiveScalingForecastResponse {
    public byte[] body;
    public GetGetPredictiveScalingForecastResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetPredictiveScalingForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetPredictiveScalingForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}