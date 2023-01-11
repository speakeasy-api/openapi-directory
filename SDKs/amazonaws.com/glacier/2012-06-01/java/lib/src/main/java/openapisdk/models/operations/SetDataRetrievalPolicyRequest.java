package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetDataRetrievalPolicyRequest {
    public SetDataRetrievalPolicyPathParams pathParams;
    public SetDataRetrievalPolicyRequest withPathParams(SetDataRetrievalPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetDataRetrievalPolicyHeaders headers;
    public SetDataRetrievalPolicyRequest withHeaders(SetDataRetrievalPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetDataRetrievalPolicyRequestBody request;
    public SetDataRetrievalPolicyRequest withRequest(SetDataRetrievalPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}