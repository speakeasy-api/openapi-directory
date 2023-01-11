package openapisdk.models.operations;



public class GetTeamPpaResponse {
    public String contentType;
    public GetTeamPpaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamPpaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamPpa[] teamPPAS;
    public GetTeamPpaResponse withTeamPpas(openapisdk.models.shared.TeamPpa[] teamPPAS) {
        this.teamPPAS = teamPPAS;
        return this;
    }
}