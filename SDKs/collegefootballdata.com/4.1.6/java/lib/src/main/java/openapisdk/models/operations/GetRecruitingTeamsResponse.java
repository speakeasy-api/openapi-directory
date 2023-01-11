package openapisdk.models.operations;



public class GetRecruitingTeamsResponse {
    public String contentType;
    public GetRecruitingTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRecruitingTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamRecruitingRank[] teamRecruitingRanks;
    public GetRecruitingTeamsResponse withTeamRecruitingRanks(openapisdk.models.shared.TeamRecruitingRank[] teamRecruitingRanks) {
        this.teamRecruitingRanks = teamRecruitingRanks;
        return this;
    }
}