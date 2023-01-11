package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachInstancesToLoadBalancerRequest {
    public AttachInstancesToLoadBalancerHeaders headers;
    public AttachInstancesToLoadBalancerRequest withHeaders(AttachInstancesToLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachInstancesToLoadBalancerRequest request;
    public AttachInstancesToLoadBalancerRequest withRequest(openapisdk.models.shared.AttachInstancesToLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}