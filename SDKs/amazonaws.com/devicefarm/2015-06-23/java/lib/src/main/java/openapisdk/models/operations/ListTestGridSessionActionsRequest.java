package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridSessionActionsRequest {
    public ListTestGridSessionActionsQueryParams queryParams;
    public ListTestGridSessionActionsRequest withQueryParams(ListTestGridSessionActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTestGridSessionActionsHeaders headers;
    public ListTestGridSessionActionsRequest withHeaders(ListTestGridSessionActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTestGridSessionActionsRequest request;
    public ListTestGridSessionActionsRequest withRequest(openapisdk.models.shared.ListTestGridSessionActionsRequest request) {
        this.request = request;
        return this;
    }
}