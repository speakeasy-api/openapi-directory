package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMlModelsRequest {
    public DescribeMlModelsQueryParams queryParams;
    public DescribeMlModelsRequest withQueryParams(DescribeMlModelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeMlModelsHeaders headers;
    public DescribeMlModelsRequest withHeaders(DescribeMlModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMlModelsInput request;
    public DescribeMlModelsRequest withRequest(openapisdk.models.shared.DescribeMlModelsInput request) {
        this.request = request;
        return this;
    }
}