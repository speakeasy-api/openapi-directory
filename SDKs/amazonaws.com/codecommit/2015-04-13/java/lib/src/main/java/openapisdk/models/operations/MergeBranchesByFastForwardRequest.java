package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeBranchesByFastForwardRequest {
    public MergeBranchesByFastForwardHeaders headers;
    public MergeBranchesByFastForwardRequest withHeaders(MergeBranchesByFastForwardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeBranchesByFastForwardInput request;
    public MergeBranchesByFastForwardRequest withRequest(openapisdk.models.shared.MergeBranchesByFastForwardInput request) {
        this.request = request;
        return this;
    }
}