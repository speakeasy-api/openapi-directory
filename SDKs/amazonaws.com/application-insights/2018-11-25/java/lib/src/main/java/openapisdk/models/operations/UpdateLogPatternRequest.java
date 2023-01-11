package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLogPatternRequest {
    public UpdateLogPatternHeaders headers;
    public UpdateLogPatternRequest withHeaders(UpdateLogPatternHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLogPatternRequest request;
    public UpdateLogPatternRequest withRequest(openapisdk.models.shared.UpdateLogPatternRequest request) {
        this.request = request;
        return this;
    }
}