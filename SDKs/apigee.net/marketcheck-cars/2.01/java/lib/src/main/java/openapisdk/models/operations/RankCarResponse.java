package openapisdk.models.operations;



public class RankCarResponse {
    public openapisdk.models.shared.CarRankResponse carRankResponse;
    public RankCarResponse withCarRankResponse(openapisdk.models.shared.CarRankResponse carRankResponse) {
        this.carRankResponse = carRankResponse;
        return this;
    }
    public String contentType;
    public RankCarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public RankCarResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public RankCarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}