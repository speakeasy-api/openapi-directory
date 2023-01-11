package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVaultAccessPolicyRequest {
    public SetVaultAccessPolicyPathParams pathParams;
    public SetVaultAccessPolicyRequest withPathParams(SetVaultAccessPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetVaultAccessPolicyHeaders headers;
    public SetVaultAccessPolicyRequest withHeaders(SetVaultAccessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetVaultAccessPolicyRequestBody request;
    public SetVaultAccessPolicyRequest withRequest(SetVaultAccessPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}