package openapisdk.models.operations;



public class UpdateOrganizationUserResponse {
    public String contentType;
    public UpdateOrganizationUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UpdateOrganizationUserResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateOrganizationUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserDetailsAdmin userDetailsAdmin;
    public UpdateOrganizationUserResponse withUserDetailsAdmin(openapisdk.models.shared.UserDetailsAdmin userDetailsAdmin) {
        this.userDetailsAdmin = userDetailsAdmin;
        return this;
    }
}