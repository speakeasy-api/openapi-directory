package openapisdk.models.operations;



public class RefreshTrustedAdvisorCheckResponse {
    public String contentType;
    public RefreshTrustedAdvisorCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public RefreshTrustedAdvisorCheckResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.RefreshTrustedAdvisorCheckResponse refreshTrustedAdvisorCheckResponse;
    public RefreshTrustedAdvisorCheckResponse withRefreshTrustedAdvisorCheckResponse(openapisdk.models.shared.RefreshTrustedAdvisorCheckResponse refreshTrustedAdvisorCheckResponse) {
        this.refreshTrustedAdvisorCheckResponse = refreshTrustedAdvisorCheckResponse;
        return this;
    }
    public Long statusCode;
    public RefreshTrustedAdvisorCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}