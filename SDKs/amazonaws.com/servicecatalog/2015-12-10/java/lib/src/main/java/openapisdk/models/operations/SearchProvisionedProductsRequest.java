package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProvisionedProductsRequest {
    public SearchProvisionedProductsQueryParams queryParams;
    public SearchProvisionedProductsRequest withQueryParams(SearchProvisionedProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchProvisionedProductsHeaders headers;
    public SearchProvisionedProductsRequest withHeaders(SearchProvisionedProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchProvisionedProductsInput request;
    public SearchProvisionedProductsRequest withRequest(openapisdk.models.shared.SearchProvisionedProductsInput request) {
        this.request = request;
        return this;
    }
}