package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendAlexaOfferToMasterRequest {
    public SendAlexaOfferToMasterHeaders headers;
    public SendAlexaOfferToMasterRequest withHeaders(SendAlexaOfferToMasterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendAlexaOfferToMasterRequestBody request;
    public SendAlexaOfferToMasterRequest withRequest(SendAlexaOfferToMasterRequestBody request) {
        this.request = request;
        return this;
    }
}