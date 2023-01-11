package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersRequest {
    public GetServersQueryParams queryParams;
    public GetServersRequest withQueryParams(GetServersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetServersHeaders headers;
    public GetServersRequest withHeaders(GetServersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServersRequest request;
    public GetServersRequest withRequest(openapisdk.models.shared.GetServersRequest request) {
        this.request = request;
        return this;
    }
}