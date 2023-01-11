package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeContinuousExportsRequest {
    public DescribeContinuousExportsQueryParams queryParams;
    public DescribeContinuousExportsRequest withQueryParams(DescribeContinuousExportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeContinuousExportsHeaders headers;
    public DescribeContinuousExportsRequest withHeaders(DescribeContinuousExportsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeContinuousExportsRequest request;
    public DescribeContinuousExportsRequest withRequest(openapisdk.models.shared.DescribeContinuousExportsRequest request) {
        this.request = request;
        return this;
    }
}