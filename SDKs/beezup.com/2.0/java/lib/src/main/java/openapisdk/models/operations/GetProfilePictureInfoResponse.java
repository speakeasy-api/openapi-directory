package openapisdk.models.operations;



public class GetProfilePictureInfoResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetProfilePictureInfoResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetProfilePictureInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetProfilePictureInfoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetProfilePictureInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProfilePictureInfoResponse profilePictureInfoResponse;
    public GetProfilePictureInfoResponse withProfilePictureInfoResponse(openapisdk.models.shared.ProfilePictureInfoResponse profilePictureInfoResponse) {
        this.profilePictureInfoResponse = profilePictureInfoResponse;
        return this;
    }
}