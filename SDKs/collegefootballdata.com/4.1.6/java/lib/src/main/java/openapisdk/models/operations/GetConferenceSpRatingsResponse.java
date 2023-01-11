package openapisdk.models.operations;



public class GetConferenceSpRatingsResponse {
    public openapisdk.models.shared.ConferenceSpRating[] conferenceSPRatings;
    public GetConferenceSpRatingsResponse withConferenceSpRatings(openapisdk.models.shared.ConferenceSpRating[] conferenceSPRatings) {
        this.conferenceSPRatings = conferenceSPRatings;
        return this;
    }
    public String contentType;
    public GetConferenceSpRatingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConferenceSpRatingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}