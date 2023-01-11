package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataSourceRequest {
    public GetDataSourceHeaders headers;
    public GetDataSourceRequest withHeaders(GetDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDataSourceInput request;
    public GetDataSourceRequest withRequest(openapisdk.models.shared.GetDataSourceInput request) {
        this.request = request;
        return this;
    }
}