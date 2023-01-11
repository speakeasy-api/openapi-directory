package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteDestinationCheckConnectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationCoreConfig request;
    public ExecuteDestinationCheckConnectionRequest withRequest(openapisdk.models.shared.DestinationCoreConfig request) {
        this.request = request;
        return this;
    }
}