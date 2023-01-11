package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDataCatalogsRequest {
    public ListDataCatalogsQueryParams queryParams;
    public ListDataCatalogsRequest withQueryParams(ListDataCatalogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDataCatalogsHeaders headers;
    public ListDataCatalogsRequest withHeaders(ListDataCatalogsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDataCatalogsInput request;
    public ListDataCatalogsRequest withRequest(openapisdk.models.shared.ListDataCatalogsInput request) {
        this.request = request;
        return this;
    }
}