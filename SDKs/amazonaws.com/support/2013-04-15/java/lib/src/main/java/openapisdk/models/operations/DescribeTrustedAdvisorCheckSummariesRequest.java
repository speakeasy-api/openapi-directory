package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrustedAdvisorCheckSummariesRequest {
    public DescribeTrustedAdvisorCheckSummariesHeaders headers;
    public DescribeTrustedAdvisorCheckSummariesRequest withHeaders(DescribeTrustedAdvisorCheckSummariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTrustedAdvisorCheckSummariesRequest request;
    public DescribeTrustedAdvisorCheckSummariesRequest withRequest(openapisdk.models.shared.DescribeTrustedAdvisorCheckSummariesRequest request) {
        this.request = request;
        return this;
    }
}