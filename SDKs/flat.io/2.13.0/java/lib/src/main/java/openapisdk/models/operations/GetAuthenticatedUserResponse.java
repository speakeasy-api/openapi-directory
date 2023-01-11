package openapisdk.models.operations;



public class GetAuthenticatedUserResponse {
    public String contentType;
    public GetAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetAuthenticatedUserResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserDetails userDetails;
    public GetAuthenticatedUserResponse withUserDetails(openapisdk.models.shared.UserDetails userDetails) {
        this.userDetails = userDetails;
        return this;
    }
}