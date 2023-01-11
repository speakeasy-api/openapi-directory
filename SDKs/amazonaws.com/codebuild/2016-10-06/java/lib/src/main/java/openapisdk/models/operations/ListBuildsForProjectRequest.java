package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildsForProjectRequest {
    public ListBuildsForProjectQueryParams queryParams;
    public ListBuildsForProjectRequest withQueryParams(ListBuildsForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBuildsForProjectHeaders headers;
    public ListBuildsForProjectRequest withHeaders(ListBuildsForProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBuildsForProjectInput request;
    public ListBuildsForProjectRequest withRequest(openapisdk.models.shared.ListBuildsForProjectInput request) {
        this.request = request;
        return this;
    }
}