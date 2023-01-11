package openapisdk.models.operations;



public class UpdateScoreTrackResponse {
    public String contentType;
    public UpdateScoreTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UpdateScoreTrackResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreTrack scoreTrack;
    public UpdateScoreTrackResponse withScoreTrack(openapisdk.models.shared.ScoreTrack scoreTrack) {
        this.scoreTrack = scoreTrack;
        return this;
    }
    public Long statusCode;
    public UpdateScoreTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}