package openapisdk.models.operations;



public class GetSrsRatingsResponse {
    public String contentType;
    public GetSrsRatingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSrsRatingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSrsRating[] teamSRSRatings;
    public GetSrsRatingsResponse withTeamSrsRatings(openapisdk.models.shared.TeamSrsRating[] teamSRSRatings) {
        this.teamSRSRatings = teamSRSRatings;
        return this;
    }
}