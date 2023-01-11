package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActivitiesRequest {
    public ListActivitiesQueryParams queryParams;
    public ListActivitiesRequest withQueryParams(ListActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListActivitiesHeaders headers;
    public ListActivitiesRequest withHeaders(ListActivitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListActivitiesInput request;
    public ListActivitiesRequest withRequest(openapisdk.models.shared.ListActivitiesInput request) {
        this.request = request;
        return this;
    }
}