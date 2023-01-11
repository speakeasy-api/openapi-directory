package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBuildRequest {
    public DescribeBuildHeaders headers;
    public DescribeBuildRequest withHeaders(DescribeBuildHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBuildInput request;
    public DescribeBuildRequest withRequest(openapisdk.models.shared.DescribeBuildInput request) {
        this.request = request;
        return this;
    }
}