package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RefreshTrustedAdvisorCheckRequest {
    public RefreshTrustedAdvisorCheckHeaders headers;
    public RefreshTrustedAdvisorCheckRequest withHeaders(RefreshTrustedAdvisorCheckHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RefreshTrustedAdvisorCheckRequest request;
    public RefreshTrustedAdvisorCheckRequest withRequest(openapisdk.models.shared.RefreshTrustedAdvisorCheckRequest request) {
        this.request = request;
        return this;
    }
}