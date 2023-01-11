package openapisdk.models.operations;



public class PostSetupBeneficiaryResponse {
    public String contentType;
    public PostSetupBeneficiaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostSetupBeneficiaryResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Object setupBeneficiaryResponse;
    public PostSetupBeneficiaryResponse withSetupBeneficiaryResponse(Object setupBeneficiaryResponse) {
        this.setupBeneficiaryResponse = setupBeneficiaryResponse;
        return this;
    }
    public Long statusCode;
    public PostSetupBeneficiaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}