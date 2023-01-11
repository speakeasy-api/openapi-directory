package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTableMetadataRequest {
    public ListTableMetadataQueryParams queryParams;
    public ListTableMetadataRequest withQueryParams(ListTableMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTableMetadataHeaders headers;
    public ListTableMetadataRequest withHeaders(ListTableMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTableMetadataInput request;
    public ListTableMetadataRequest withRequest(openapisdk.models.shared.ListTableMetadataInput request) {
        this.request = request;
        return this;
    }
}