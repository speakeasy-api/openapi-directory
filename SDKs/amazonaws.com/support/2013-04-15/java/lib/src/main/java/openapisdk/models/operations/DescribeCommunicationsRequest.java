package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCommunicationsRequest {
    public DescribeCommunicationsQueryParams queryParams;
    public DescribeCommunicationsRequest withQueryParams(DescribeCommunicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeCommunicationsHeaders headers;
    public DescribeCommunicationsRequest withHeaders(DescribeCommunicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCommunicationsRequest request;
    public DescribeCommunicationsRequest withRequest(openapisdk.models.shared.DescribeCommunicationsRequest request) {
        this.request = request;
        return this;
    }
}