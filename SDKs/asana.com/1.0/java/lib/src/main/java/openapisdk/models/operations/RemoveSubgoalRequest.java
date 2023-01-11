package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSubgoalRequest {
    public RemoveSubgoalPathParams pathParams;
    public RemoveSubgoalRequest withPathParams(RemoveSubgoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveSubgoalQueryParams queryParams;
    public RemoveSubgoalRequest withQueryParams(RemoveSubgoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveSubgoalRequestBody request;
    public RemoveSubgoalRequest withRequest(RemoveSubgoalRequestBody request) {
        this.request = request;
        return this;
    }
}