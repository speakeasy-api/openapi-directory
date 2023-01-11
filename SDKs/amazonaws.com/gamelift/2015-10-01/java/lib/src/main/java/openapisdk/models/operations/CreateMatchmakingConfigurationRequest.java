package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMatchmakingConfigurationRequest {
    public CreateMatchmakingConfigurationHeaders headers;
    public CreateMatchmakingConfigurationRequest withHeaders(CreateMatchmakingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMatchmakingConfigurationInput request;
    public CreateMatchmakingConfigurationRequest withRequest(openapisdk.models.shared.CreateMatchmakingConfigurationInput request) {
        this.request = request;
        return this;
    }
}