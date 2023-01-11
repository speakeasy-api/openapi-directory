package openapisdk.models.operations;



public class GetTeamRecordsResponse {
    public String contentType;
    public GetTeamRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamRecord[] teamRecords;
    public GetTeamRecordsResponse withTeamRecords(openapisdk.models.shared.TeamRecord[] teamRecords) {
        this.teamRecords = teamRecords;
        return this;
    }
}