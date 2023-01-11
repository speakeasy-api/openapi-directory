package openapisdk.models.operations;



public class DescribeTrustedAdvisorChecksResponse {
    public String contentType;
    public DescribeTrustedAdvisorChecksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTrustedAdvisorChecksResponse describeTrustedAdvisorChecksResponse;
    public DescribeTrustedAdvisorChecksResponse withDescribeTrustedAdvisorChecksResponse(openapisdk.models.shared.DescribeTrustedAdvisorChecksResponse describeTrustedAdvisorChecksResponse) {
        this.describeTrustedAdvisorChecksResponse = describeTrustedAdvisorChecksResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeTrustedAdvisorChecksResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeTrustedAdvisorChecksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}