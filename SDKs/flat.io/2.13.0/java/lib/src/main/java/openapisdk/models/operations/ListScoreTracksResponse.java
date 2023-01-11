package openapisdk.models.operations;



public class ListScoreTracksResponse {
    public String contentType;
    public ListScoreTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListScoreTracksResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.ScoreTrack[] scoreTracks;
    public ListScoreTracksResponse withScoreTracks(openapisdk.models.shared.ScoreTrack[] scoreTracks) {
        this.scoreTracks = scoreTracks;
        return this;
    }
    public Long statusCode;
    public ListScoreTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}