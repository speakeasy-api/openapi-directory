package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSubgoalRequest {
    public AddSubgoalPathParams pathParams;
    public AddSubgoalRequest withPathParams(AddSubgoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddSubgoalQueryParams queryParams;
    public AddSubgoalRequest withQueryParams(AddSubgoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddSubgoalRequestBody request;
    public AddSubgoalRequest withRequest(AddSubgoalRequestBody request) {
        this.request = request;
        return this;
    }
}