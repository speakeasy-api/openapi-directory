package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceTemplatesRequest {
    public ListServiceTemplatesQueryParams queryParams;
    public ListServiceTemplatesRequest withQueryParams(ListServiceTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceTemplatesHeaders headers;
    public ListServiceTemplatesRequest withHeaders(ListServiceTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceTemplatesInput request;
    public ListServiceTemplatesRequest withRequest(openapisdk.models.shared.ListServiceTemplatesInput request) {
        this.request = request;
        return this;
    }
}