package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThirdPartyJobDetailsRequest {
    public GetThirdPartyJobDetailsHeaders headers;
    public GetThirdPartyJobDetailsRequest withHeaders(GetThirdPartyJobDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetThirdPartyJobDetailsInput request;
    public GetThirdPartyJobDetailsRequest withRequest(openapisdk.models.shared.GetThirdPartyJobDetailsInput request) {
        this.request = request;
        return this;
    }
}