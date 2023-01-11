package openapisdk.models.operations;



public class AddScoreTrackResponse {
    public String contentType;
    public AddScoreTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public AddScoreTrackResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreTrack scoreTrack;
    public AddScoreTrackResponse withScoreTrack(openapisdk.models.shared.ScoreTrack scoreTrack) {
        this.scoreTrack = scoreTrack;
        return this;
    }
    public Long statusCode;
    public AddScoreTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}