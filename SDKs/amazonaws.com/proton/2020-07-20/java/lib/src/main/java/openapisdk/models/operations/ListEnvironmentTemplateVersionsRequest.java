package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnvironmentTemplateVersionsRequest {
    public ListEnvironmentTemplateVersionsQueryParams queryParams;
    public ListEnvironmentTemplateVersionsRequest withQueryParams(ListEnvironmentTemplateVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEnvironmentTemplateVersionsHeaders headers;
    public ListEnvironmentTemplateVersionsRequest withHeaders(ListEnvironmentTemplateVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEnvironmentTemplateVersionsInput request;
    public ListEnvironmentTemplateVersionsRequest withRequest(openapisdk.models.shared.ListEnvironmentTemplateVersionsInput request) {
        this.request = request;
        return this;
    }
}