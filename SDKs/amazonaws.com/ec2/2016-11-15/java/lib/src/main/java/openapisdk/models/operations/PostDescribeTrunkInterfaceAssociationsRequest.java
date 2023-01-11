package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrunkInterfaceAssociationsRequest {
    public PostDescribeTrunkInterfaceAssociationsQueryParams queryParams;
    public PostDescribeTrunkInterfaceAssociationsRequest withQueryParams(PostDescribeTrunkInterfaceAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTrunkInterfaceAssociationsHeaders headers;
    public PostDescribeTrunkInterfaceAssociationsRequest withHeaders(PostDescribeTrunkInterfaceAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTrunkInterfaceAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}