package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCasesRequest {
    public DescribeCasesQueryParams queryParams;
    public DescribeCasesRequest withQueryParams(DescribeCasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeCasesHeaders headers;
    public DescribeCasesRequest withHeaders(DescribeCasesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCasesRequest request;
    public DescribeCasesRequest withRequest(openapisdk.models.shared.DescribeCasesRequest request) {
        this.request = request;
        return this;
    }
}