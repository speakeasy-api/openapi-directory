package openapisdk.models.operations;



public class GetScoreTrackResponse {
    public String contentType;
    public GetScoreTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetScoreTrackResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreTrack scoreTrack;
    public GetScoreTrackResponse withScoreTrack(openapisdk.models.shared.ScoreTrack scoreTrack) {
        this.scoreTrack = scoreTrack;
        return this;
    }
    public Long statusCode;
    public GetScoreTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}