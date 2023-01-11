package openapisdk.models.operations;



public class DescribeTrustedAdvisorCheckResultResponse {
    public String contentType;
    public DescribeTrustedAdvisorCheckResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTrustedAdvisorCheckResultResponse describeTrustedAdvisorCheckResultResponse;
    public DescribeTrustedAdvisorCheckResultResponse withDescribeTrustedAdvisorCheckResultResponse(openapisdk.models.shared.DescribeTrustedAdvisorCheckResultResponse describeTrustedAdvisorCheckResultResponse) {
        this.describeTrustedAdvisorCheckResultResponse = describeTrustedAdvisorCheckResultResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeTrustedAdvisorCheckResultResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeTrustedAdvisorCheckResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}