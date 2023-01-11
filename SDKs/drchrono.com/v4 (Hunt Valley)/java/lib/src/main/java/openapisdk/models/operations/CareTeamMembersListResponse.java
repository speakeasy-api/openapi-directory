package openapisdk.models.operations;



public class CareTeamMembersListResponse {
    public String contentType;
    public CareTeamMembersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CareTeamMembersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CareTeamMembersList200ApplicationJson careTeamMembersList200ApplicationJSONObject;
    public CareTeamMembersListResponse withCareTeamMembersList200ApplicationJsonObject(CareTeamMembersList200ApplicationJson careTeamMembersList200ApplicationJSONObject) {
        this.careTeamMembersList200ApplicationJSONObject = careTeamMembersList200ApplicationJSONObject;
        return this;
    }
}