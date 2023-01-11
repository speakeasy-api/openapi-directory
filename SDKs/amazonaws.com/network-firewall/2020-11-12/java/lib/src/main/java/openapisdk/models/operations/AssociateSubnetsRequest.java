package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateSubnetsRequest {
    public AssociateSubnetsHeaders headers;
    public AssociateSubnetsRequest withHeaders(AssociateSubnetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateSubnetsRequest request;
    public AssociateSubnetsRequest withRequest(openapisdk.models.shared.AssociateSubnetsRequest request) {
        this.request = request;
        return this;
    }
}