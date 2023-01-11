package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMatchmakingConfigurationRequest {
    public DeleteMatchmakingConfigurationHeaders headers;
    public DeleteMatchmakingConfigurationRequest withHeaders(DeleteMatchmakingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMatchmakingConfigurationInput request;
    public DeleteMatchmakingConfigurationRequest withRequest(openapisdk.models.shared.DeleteMatchmakingConfigurationInput request) {
        this.request = request;
        return this;
    }
}