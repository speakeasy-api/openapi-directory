package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayMediaOnQueueRequest {
    public PlayMediaOnQueueHeaders headers;
    public PlayMediaOnQueueRequest withHeaders(PlayMediaOnQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlayMediaRequest request;
    public PlayMediaOnQueueRequest withRequest(openapisdk.models.shared.PlayMediaRequest request) {
        this.request = request;
        return this;
    }
}