package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReplicationSetsRequest {
    public ListReplicationSetsQueryParams queryParams;
    public ListReplicationSetsRequest withQueryParams(ListReplicationSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReplicationSetsHeaders headers;
    public ListReplicationSetsRequest withHeaders(ListReplicationSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListReplicationSetsRequestBody request;
    public ListReplicationSetsRequest withRequest(ListReplicationSetsRequestBody request) {
        this.request = request;
        return this;
    }
}