package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRobotsRequest {
    public ListRobotsQueryParams queryParams;
    public ListRobotsRequest withQueryParams(ListRobotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRobotsHeaders headers;
    public ListRobotsRequest withHeaders(ListRobotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListRobotsRequestBody request;
    public ListRobotsRequest withRequest(ListRobotsRequestBody request) {
        this.request = request;
        return this;
    }
}