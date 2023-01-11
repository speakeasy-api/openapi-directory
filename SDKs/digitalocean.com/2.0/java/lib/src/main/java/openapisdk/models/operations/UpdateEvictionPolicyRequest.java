package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEvictionPolicyRequest {
    public UpdateEvictionPolicyPathParams pathParams;
    public UpdateEvictionPolicyRequest withPathParams(UpdateEvictionPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema request;
    public UpdateEvictionPolicyRequest withRequest(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema request) {
        this.request = request;
        return this;
    }
}