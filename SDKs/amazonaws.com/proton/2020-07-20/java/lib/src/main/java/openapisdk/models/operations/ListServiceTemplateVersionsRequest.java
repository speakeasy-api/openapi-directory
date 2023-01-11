package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceTemplateVersionsRequest {
    public ListServiceTemplateVersionsQueryParams queryParams;
    public ListServiceTemplateVersionsRequest withQueryParams(ListServiceTemplateVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceTemplateVersionsHeaders headers;
    public ListServiceTemplateVersionsRequest withHeaders(ListServiceTemplateVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceTemplateVersionsInput request;
    public ListServiceTemplateVersionsRequest withRequest(openapisdk.models.shared.ListServiceTemplateVersionsInput request) {
        this.request = request;
        return this;
    }
}