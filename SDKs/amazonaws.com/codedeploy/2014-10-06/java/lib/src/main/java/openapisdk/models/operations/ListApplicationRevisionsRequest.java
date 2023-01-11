package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationRevisionsRequest {
    public ListApplicationRevisionsQueryParams queryParams;
    public ListApplicationRevisionsRequest withQueryParams(ListApplicationRevisionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApplicationRevisionsHeaders headers;
    public ListApplicationRevisionsRequest withHeaders(ListApplicationRevisionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApplicationRevisionsInput request;
    public ListApplicationRevisionsRequest withRequest(openapisdk.models.shared.ListApplicationRevisionsInput request) {
        this.request = request;
        return this;
    }
}