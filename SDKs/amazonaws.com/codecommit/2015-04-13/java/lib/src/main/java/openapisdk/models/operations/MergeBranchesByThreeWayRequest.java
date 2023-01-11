package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeBranchesByThreeWayRequest {
    public MergeBranchesByThreeWayHeaders headers;
    public MergeBranchesByThreeWayRequest withHeaders(MergeBranchesByThreeWayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeBranchesByThreeWayInput request;
    public MergeBranchesByThreeWayRequest withRequest(openapisdk.models.shared.MergeBranchesByThreeWayInput request) {
        this.request = request;
        return this;
    }
}