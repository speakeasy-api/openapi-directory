package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateWebAclRequest {
    public AssociateWebAclHeaders headers;
    public AssociateWebAclRequest withHeaders(AssociateWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateWebAclRequest request;
    public AssociateWebAclRequest withRequest(openapisdk.models.shared.AssociateWebAclRequest request) {
        this.request = request;
        return this;
    }
}