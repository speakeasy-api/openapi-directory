package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlertPolicyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAlertPolicyRequestBody request;
    public CreateAlertPolicyRequest withRequest(CreateAlertPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}