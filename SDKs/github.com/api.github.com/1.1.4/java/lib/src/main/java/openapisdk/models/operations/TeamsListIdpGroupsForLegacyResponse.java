package openapisdk.models.operations;



public class TeamsListIdpGroupsForLegacyResponse {
    public String contentType;
    public TeamsListIdpGroupsForLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsListIdpGroupsForLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsListIdpGroupsForLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GroupMapping groupMapping;
    public TeamsListIdpGroupsForLegacyResponse withGroupMapping(openapisdk.models.shared.GroupMapping groupMapping) {
        this.groupMapping = groupMapping;
        return this;
    }
}