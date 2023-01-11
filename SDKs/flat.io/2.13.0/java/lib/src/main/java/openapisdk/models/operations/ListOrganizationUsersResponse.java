package openapisdk.models.operations;



public class ListOrganizationUsersResponse {
    public String contentType;
    public ListOrganizationUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListOrganizationUsersResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListOrganizationUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserDetailsAdmin[] userDetailsAdmins;
    public ListOrganizationUsersResponse withUserDetailsAdmins(openapisdk.models.shared.UserDetailsAdmin[] userDetailsAdmins) {
        this.userDetailsAdmins = userDetailsAdmins;
        return this;
    }
}