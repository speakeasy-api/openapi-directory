package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTableMetadataRequest {
    public GetTableMetadataHeaders headers;
    public GetTableMetadataRequest withHeaders(GetTableMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTableMetadataInput request;
    public GetTableMetadataRequest withRequest(openapisdk.models.shared.GetTableMetadataInput request) {
        this.request = request;
        return this;
    }
}