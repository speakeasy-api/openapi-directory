package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMatchmakingConfigurationRequest {
    public UpdateMatchmakingConfigurationHeaders headers;
    public UpdateMatchmakingConfigurationRequest withHeaders(UpdateMatchmakingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMatchmakingConfigurationInput request;
    public UpdateMatchmakingConfigurationRequest withRequest(openapisdk.models.shared.UpdateMatchmakingConfigurationInput request) {
        this.request = request;
        return this;
    }
}