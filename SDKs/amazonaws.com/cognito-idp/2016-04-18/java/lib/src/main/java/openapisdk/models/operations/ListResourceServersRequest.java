package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceServersRequest {
    public ListResourceServersQueryParams queryParams;
    public ListResourceServersRequest withQueryParams(ListResourceServersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceServersHeaders headers;
    public ListResourceServersRequest withHeaders(ListResourceServersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourceServersRequest request;
    public ListResourceServersRequest withRequest(openapisdk.models.shared.ListResourceServersRequest request) {
        this.request = request;
        return this;
    }
}