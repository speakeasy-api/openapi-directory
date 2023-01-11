package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnvironmentAccountConnectionsRequest {
    public ListEnvironmentAccountConnectionsQueryParams queryParams;
    public ListEnvironmentAccountConnectionsRequest withQueryParams(ListEnvironmentAccountConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEnvironmentAccountConnectionsHeaders headers;
    public ListEnvironmentAccountConnectionsRequest withHeaders(ListEnvironmentAccountConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEnvironmentAccountConnectionsInput request;
    public ListEnvironmentAccountConnectionsRequest withRequest(openapisdk.models.shared.ListEnvironmentAccountConnectionsInput request) {
        this.request = request;
        return this;
    }
}