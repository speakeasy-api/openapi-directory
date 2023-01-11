package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetV2LoggingLevelRequest {
    public SetV2LoggingLevelHeaders headers;
    public SetV2LoggingLevelRequest withHeaders(SetV2LoggingLevelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetV2LoggingLevelRequestBody request;
    public SetV2LoggingLevelRequest withRequest(SetV2LoggingLevelRequestBody request) {
        this.request = request;
        return this;
    }
}