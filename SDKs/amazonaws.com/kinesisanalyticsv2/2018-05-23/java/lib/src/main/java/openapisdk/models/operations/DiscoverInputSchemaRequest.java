package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoverInputSchemaRequest {
    public DiscoverInputSchemaHeaders headers;
    public DiscoverInputSchemaRequest withHeaders(DiscoverInputSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscoverInputSchemaRequest request;
    public DiscoverInputSchemaRequest withRequest(openapisdk.models.shared.DiscoverInputSchemaRequest request) {
        this.request = request;
        return this;
    }
}