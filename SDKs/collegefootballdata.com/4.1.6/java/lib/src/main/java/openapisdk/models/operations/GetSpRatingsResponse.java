package openapisdk.models.operations;



public class GetSpRatingsResponse {
    public String contentType;
    public GetSpRatingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSpRatingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSpRating[] teamSPRatings;
    public GetSpRatingsResponse withTeamSpRatings(openapisdk.models.shared.TeamSpRating[] teamSPRatings) {
        this.teamSPRatings = teamSPRatings;
        return this;
    }
}