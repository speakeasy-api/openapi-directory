package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeBranchesBySquashRequest {
    public MergeBranchesBySquashHeaders headers;
    public MergeBranchesBySquashRequest withHeaders(MergeBranchesBySquashHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeBranchesBySquashInput request;
    public MergeBranchesBySquashRequest withRequest(openapisdk.models.shared.MergeBranchesBySquashInput request) {
        this.request = request;
        return this;
    }
}