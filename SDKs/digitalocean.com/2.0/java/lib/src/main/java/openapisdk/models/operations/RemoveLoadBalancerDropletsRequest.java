package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLoadBalancerDropletsRequest {
    public RemoveLoadBalancerDropletsPathParams pathParams;
    public RemoveLoadBalancerDropletsRequest withPathParams(RemoveLoadBalancerDropletsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 request;
    public RemoveLoadBalancerDropletsRequest withRequest(openapisdk.models.shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 request) {
        this.request = request;
        return this;
    }
}