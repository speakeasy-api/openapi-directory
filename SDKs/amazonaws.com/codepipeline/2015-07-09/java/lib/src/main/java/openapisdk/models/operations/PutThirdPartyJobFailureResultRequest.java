package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutThirdPartyJobFailureResultRequest {
    public PutThirdPartyJobFailureResultHeaders headers;
    public PutThirdPartyJobFailureResultRequest withHeaders(PutThirdPartyJobFailureResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutThirdPartyJobFailureResultInput request;
    public PutThirdPartyJobFailureResultRequest withRequest(openapisdk.models.shared.PutThirdPartyJobFailureResultInput request) {
        this.request = request;
        return this;
    }
}