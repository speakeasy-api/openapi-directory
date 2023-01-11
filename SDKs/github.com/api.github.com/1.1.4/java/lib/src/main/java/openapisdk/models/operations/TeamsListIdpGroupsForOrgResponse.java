package openapisdk.models.operations;



public class TeamsListIdpGroupsForOrgResponse {
    public String contentType;
    public TeamsListIdpGroupsForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListIdpGroupsForOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListIdpGroupsForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GroupMapping groupMapping;
    public TeamsListIdpGroupsForOrgResponse withGroupMapping(openapisdk.models.shared.GroupMapping groupMapping) {
        this.groupMapping = groupMapping;
        return this;
    }
}