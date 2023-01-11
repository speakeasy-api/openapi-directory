package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkDeleteAdsByListingIdRequest {
    public BulkDeleteAdsByListingIdPathParams pathParams;
    public BulkDeleteAdsByListingIdRequest withPathParams(BulkDeleteAdsByListingIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkDeleteAdRequest request;
    public BulkDeleteAdsByListingIdRequest withRequest(openapisdk.models.shared.BulkDeleteAdRequest request) {
        this.request = request;
        return this;
    }
    public BulkDeleteAdsByListingIdSecurity security;
    public BulkDeleteAdsByListingIdRequest withSecurity(BulkDeleteAdsByListingIdSecurity security) {
        this.security = security;
        return this;
    }
}