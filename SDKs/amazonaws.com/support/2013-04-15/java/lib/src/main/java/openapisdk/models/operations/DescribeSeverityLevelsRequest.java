package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSeverityLevelsRequest {
    public DescribeSeverityLevelsHeaders headers;
    public DescribeSeverityLevelsRequest withHeaders(DescribeSeverityLevelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSeverityLevelsRequest request;
    public DescribeSeverityLevelsRequest withRequest(openapisdk.models.shared.DescribeSeverityLevelsRequest request) {
        this.request = request;
        return this;
    }
}