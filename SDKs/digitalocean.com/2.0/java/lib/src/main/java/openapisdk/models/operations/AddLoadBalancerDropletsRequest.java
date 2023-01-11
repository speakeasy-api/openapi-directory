package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLoadBalancerDropletsRequest {
    public AddLoadBalancerDropletsPathParams pathParams;
    public AddLoadBalancerDropletsRequest withPathParams(AddLoadBalancerDropletsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 request;
    public AddLoadBalancerDropletsRequest withRequest(openapisdk.models.shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 request) {
        this.request = request;
        return this;
    }
}