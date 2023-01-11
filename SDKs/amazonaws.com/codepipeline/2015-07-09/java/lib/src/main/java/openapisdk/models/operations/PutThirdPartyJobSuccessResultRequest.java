package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutThirdPartyJobSuccessResultRequest {
    public PutThirdPartyJobSuccessResultHeaders headers;
    public PutThirdPartyJobSuccessResultRequest withHeaders(PutThirdPartyJobSuccessResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutThirdPartyJobSuccessResultInput request;
    public PutThirdPartyJobSuccessResultRequest withRequest(openapisdk.models.shared.PutThirdPartyJobSuccessResultInput request) {
        this.request = request;
        return this;
    }
}