package openapisdk.models.operations;



public class DescribeTrustedAdvisorCheckSummariesResponse {
    public String contentType;
    public DescribeTrustedAdvisorCheckSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTrustedAdvisorCheckSummariesResponse describeTrustedAdvisorCheckSummariesResponse;
    public DescribeTrustedAdvisorCheckSummariesResponse withDescribeTrustedAdvisorCheckSummariesResponse(openapisdk.models.shared.DescribeTrustedAdvisorCheckSummariesResponse describeTrustedAdvisorCheckSummariesResponse) {
        this.describeTrustedAdvisorCheckSummariesResponse = describeTrustedAdvisorCheckSummariesResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeTrustedAdvisorCheckSummariesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeTrustedAdvisorCheckSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}