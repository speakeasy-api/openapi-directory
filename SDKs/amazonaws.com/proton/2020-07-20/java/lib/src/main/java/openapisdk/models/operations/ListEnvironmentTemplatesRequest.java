package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnvironmentTemplatesRequest {
    public ListEnvironmentTemplatesQueryParams queryParams;
    public ListEnvironmentTemplatesRequest withQueryParams(ListEnvironmentTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEnvironmentTemplatesHeaders headers;
    public ListEnvironmentTemplatesRequest withHeaders(ListEnvironmentTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEnvironmentTemplatesInput request;
    public ListEnvironmentTemplatesRequest withRequest(openapisdk.models.shared.ListEnvironmentTemplatesInput request) {
        this.request = request;
        return this;
    }
}