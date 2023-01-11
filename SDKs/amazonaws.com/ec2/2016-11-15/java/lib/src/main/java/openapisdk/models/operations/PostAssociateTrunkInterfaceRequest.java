package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateTrunkInterfaceRequest {
    public PostAssociateTrunkInterfaceQueryParams queryParams;
    public PostAssociateTrunkInterfaceRequest withQueryParams(PostAssociateTrunkInterfaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateTrunkInterfaceHeaders headers;
    public PostAssociateTrunkInterfaceRequest withHeaders(PostAssociateTrunkInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateTrunkInterfaceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}