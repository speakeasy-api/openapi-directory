package openapisdk.models.operations;



public class GetRecruitingPlayersResponse {
    public String contentType;
    public GetRecruitingPlayersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Recruit[] recruits;
    public GetRecruitingPlayersResponse withRecruits(openapisdk.models.shared.Recruit[] recruits) {
        this.recruits = recruits;
        return this;
    }
    public Long statusCode;
    public GetRecruitingPlayersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}