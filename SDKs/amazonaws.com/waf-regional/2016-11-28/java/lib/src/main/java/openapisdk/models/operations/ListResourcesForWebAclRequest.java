package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourcesForWebAclRequest {
    public ListResourcesForWebAclHeaders headers;
    public ListResourcesForWebAclRequest withHeaders(ListResourcesForWebAclHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourcesForWebAclRequest request;
    public ListResourcesForWebAclRequest withRequest(openapisdk.models.shared.ListResourcesForWebAclRequest request) {
        this.request = request;
        return this;
    }
}