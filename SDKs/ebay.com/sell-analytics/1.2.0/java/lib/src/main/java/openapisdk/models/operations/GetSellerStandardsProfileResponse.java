package openapisdk.models.operations;



public class GetSellerStandardsProfileResponse {
    public String contentType;
    public GetSellerStandardsProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StandardsProfile standardsProfile;
    public GetSellerStandardsProfileResponse withStandardsProfile(openapisdk.models.shared.StandardsProfile standardsProfile) {
        this.standardsProfile = standardsProfile;
        return this;
    }
    public Long statusCode;
    public GetSellerStandardsProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}