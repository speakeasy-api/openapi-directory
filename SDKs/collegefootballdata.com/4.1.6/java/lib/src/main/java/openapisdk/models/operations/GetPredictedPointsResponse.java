package openapisdk.models.operations;



public class GetPredictedPointsResponse {
    public String contentType;
    public GetPredictedPointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PredictedPoints[] predictedPoints;
    public GetPredictedPointsResponse withPredictedPoints(openapisdk.models.shared.PredictedPoints[] predictedPoints) {
        this.predictedPoints = predictedPoints;
        return this;
    }
    public Long statusCode;
    public GetPredictedPointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}