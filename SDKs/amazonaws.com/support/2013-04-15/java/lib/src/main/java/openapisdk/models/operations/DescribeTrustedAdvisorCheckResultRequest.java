package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrustedAdvisorCheckResultRequest {
    public DescribeTrustedAdvisorCheckResultHeaders headers;
    public DescribeTrustedAdvisorCheckResultRequest withHeaders(DescribeTrustedAdvisorCheckResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTrustedAdvisorCheckResultRequest request;
    public DescribeTrustedAdvisorCheckResultRequest withRequest(openapisdk.models.shared.DescribeTrustedAdvisorCheckResultRequest request) {
        this.request = request;
        return this;
    }
}