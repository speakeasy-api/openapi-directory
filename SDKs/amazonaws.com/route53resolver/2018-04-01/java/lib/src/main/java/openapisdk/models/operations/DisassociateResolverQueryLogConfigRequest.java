package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateResolverQueryLogConfigRequest {
    public DisassociateResolverQueryLogConfigHeaders headers;
    public DisassociateResolverQueryLogConfigRequest withHeaders(DisassociateResolverQueryLogConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateResolverQueryLogConfigRequest request;
    public DisassociateResolverQueryLogConfigRequest withRequest(openapisdk.models.shared.DisassociateResolverQueryLogConfigRequest request) {
        this.request = request;
        return this;
    }
}