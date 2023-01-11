package openapisdk.models.operations;



public class CreateOrganizationUserResponse {
    public String contentType;
    public CreateOrganizationUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateOrganizationUserResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public CreateOrganizationUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserDetailsAdmin userDetailsAdmin;
    public CreateOrganizationUserResponse withUserDetailsAdmin(openapisdk.models.shared.UserDetailsAdmin userDetailsAdmin) {
        this.userDetailsAdmin = userDetailsAdmin;
        return this;
    }
}