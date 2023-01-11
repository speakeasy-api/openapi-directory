package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteSourceCheckConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceCoreConfig request;
    public ExecuteSourceCheckConnectionRequest withRequest(openapisdk.models.shared.SourceCoreConfig request) {
        this.request = request;
        return this;
    }
}