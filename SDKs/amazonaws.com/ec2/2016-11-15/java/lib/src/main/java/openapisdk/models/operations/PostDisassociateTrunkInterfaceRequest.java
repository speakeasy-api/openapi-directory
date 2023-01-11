package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateTrunkInterfaceRequest {
    public PostDisassociateTrunkInterfaceQueryParams queryParams;
    public PostDisassociateTrunkInterfaceRequest withQueryParams(PostDisassociateTrunkInterfaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateTrunkInterfaceHeaders headers;
    public PostDisassociateTrunkInterfaceRequest withHeaders(PostDisassociateTrunkInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateTrunkInterfaceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}