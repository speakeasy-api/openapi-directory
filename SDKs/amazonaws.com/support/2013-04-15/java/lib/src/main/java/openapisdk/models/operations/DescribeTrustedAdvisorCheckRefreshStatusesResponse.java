package openapisdk.models.operations;



public class DescribeTrustedAdvisorCheckRefreshStatusesResponse {
    public String contentType;
    public DescribeTrustedAdvisorCheckRefreshStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse describeTrustedAdvisorCheckRefreshStatusesResponse;
    public DescribeTrustedAdvisorCheckRefreshStatusesResponse withDescribeTrustedAdvisorCheckRefreshStatusesResponse(openapisdk.models.shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse describeTrustedAdvisorCheckRefreshStatusesResponse) {
        this.describeTrustedAdvisorCheckRefreshStatusesResponse = describeTrustedAdvisorCheckRefreshStatusesResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeTrustedAdvisorCheckRefreshStatusesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeTrustedAdvisorCheckRefreshStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}