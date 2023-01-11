package openapisdk.models.operations;



public class GetOrganizationMembersResponse {
    public String contentType;
    public GetOrganizationMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserModel[] userModels;
    public GetOrganizationMembersResponse withUserModels(openapisdk.models.shared.UserModel[] userModels) {
        this.userModels = userModels;
        return this;
    }
}