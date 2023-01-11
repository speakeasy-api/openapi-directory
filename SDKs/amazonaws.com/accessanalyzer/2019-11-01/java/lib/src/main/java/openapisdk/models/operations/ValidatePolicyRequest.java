package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidatePolicyRequest {
    public ValidatePolicyQueryParams queryParams;
    public ValidatePolicyRequest withQueryParams(ValidatePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ValidatePolicyHeaders headers;
    public ValidatePolicyRequest withHeaders(ValidatePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ValidatePolicyRequestBody request;
    public ValidatePolicyRequest withRequest(ValidatePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}