package openapisdk.models.operations;



public class TeamsListIdpGroupsInOrgResponse {
    public String contentType;
    public TeamsListIdpGroupsInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsListIdpGroupsInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GroupMapping groupMapping;
    public TeamsListIdpGroupsInOrgResponse withGroupMapping(openapisdk.models.shared.GroupMapping groupMapping) {
        this.groupMapping = groupMapping;
        return this;
    }
}