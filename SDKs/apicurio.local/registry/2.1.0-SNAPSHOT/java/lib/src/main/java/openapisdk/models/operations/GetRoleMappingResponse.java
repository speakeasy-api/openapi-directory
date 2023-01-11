package openapisdk.models.operations;



public class GetRoleMappingResponse {
    public String contentType;
    public GetRoleMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetRoleMappingResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.RoleMapping roleMapping;
    public GetRoleMappingResponse withRoleMapping(openapisdk.models.shared.RoleMapping roleMapping) {
        this.roleMapping = roleMapping;
        return this;
    }
    public Long statusCode;
    public GetRoleMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}