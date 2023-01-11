package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceActionsRequest {
    public ListServiceActionsQueryParams queryParams;
    public ListServiceActionsRequest withQueryParams(ListServiceActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceActionsHeaders headers;
    public ListServiceActionsRequest withHeaders(ListServiceActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceActionsInput request;
    public ListServiceActionsRequest withRequest(openapisdk.models.shared.ListServiceActionsInput request) {
        this.request = request;
        return this;
    }
}