package openapisdk.models.operations;



public class TeamsAddMemberLegacyResponse {
    public String contentType;
    public TeamsAddMemberLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddMemberLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsAddMemberLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public TeamsAddMemberLegacy422ApplicationJson teamsAddMemberLegacy422ApplicationJSONObject;
    public TeamsAddMemberLegacyResponse withTeamsAddMemberLegacy422ApplicationJsonObject(TeamsAddMemberLegacy422ApplicationJson teamsAddMemberLegacy422ApplicationJSONObject) {
        this.teamsAddMemberLegacy422ApplicationJSONObject = teamsAddMemberLegacy422ApplicationJSONObject;
        return this;
    }
}