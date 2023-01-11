package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrustedAdvisorChecksRequest {
    public DescribeTrustedAdvisorChecksHeaders headers;
    public DescribeTrustedAdvisorChecksRequest withHeaders(DescribeTrustedAdvisorChecksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTrustedAdvisorChecksRequest request;
    public DescribeTrustedAdvisorChecksRequest withRequest(openapisdk.models.shared.DescribeTrustedAdvisorChecksRequest request) {
        this.request = request;
        return this;
    }
}