package openapisdk.models.operations;



public class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse {
    public String contentType;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GroupMapping groupMapping;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse withGroupMapping(openapisdk.models.shared.GroupMapping groupMapping) {
        this.groupMapping = groupMapping;
        return this;
    }
}