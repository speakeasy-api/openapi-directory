package openapisdk.models.operations;



public class GetKycResponse {
    public String contentType;
    public GetKycResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.KycResponse kycResponse;
    public GetKycResponse withKycResponse(openapisdk.models.shared.KycResponse kycResponse) {
        this.kycResponse = kycResponse;
        return this;
    }
    public Long statusCode;
    public GetKycResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}