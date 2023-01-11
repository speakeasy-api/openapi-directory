package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteSourceDiscoverSchemaRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceCoreConfig request;
    public ExecuteSourceDiscoverSchemaRequest withRequest(openapisdk.models.shared.SourceCoreConfig request) {
        this.request = request;
        return this;
    }
}