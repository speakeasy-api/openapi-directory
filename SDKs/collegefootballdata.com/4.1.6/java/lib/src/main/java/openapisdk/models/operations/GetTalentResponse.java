package openapisdk.models.operations;



public class GetTalentResponse {
    public String contentType;
    public GetTalentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTalentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamTalent[] teamTalents;
    public GetTalentResponse withTeamTalents(openapisdk.models.shared.TeamTalent[] teamTalents) {
        this.teamTalents = teamTalents;
        return this;
    }
}