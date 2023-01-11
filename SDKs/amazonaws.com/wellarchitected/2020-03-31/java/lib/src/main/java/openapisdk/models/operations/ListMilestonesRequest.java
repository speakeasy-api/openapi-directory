package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMilestonesRequest {
    public ListMilestonesPathParams pathParams;
    public ListMilestonesRequest withPathParams(ListMilestonesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMilestonesQueryParams queryParams;
    public ListMilestonesRequest withQueryParams(ListMilestonesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMilestonesHeaders headers;
    public ListMilestonesRequest withHeaders(ListMilestonesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListMilestonesRequestBody request;
    public ListMilestonesRequest withRequest(ListMilestonesRequestBody request) {
        this.request = request;
        return this;
    }
}