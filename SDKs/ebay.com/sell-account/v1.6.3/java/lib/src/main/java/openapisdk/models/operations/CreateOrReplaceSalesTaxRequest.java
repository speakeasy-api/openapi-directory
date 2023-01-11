package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrReplaceSalesTaxRequest {
    public CreateOrReplaceSalesTaxPathParams pathParams;
    public CreateOrReplaceSalesTaxRequest withPathParams(CreateOrReplaceSalesTaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SalesTaxBase request;
    public CreateOrReplaceSalesTaxRequest withRequest(openapisdk.models.shared.SalesTaxBase request) {
        this.request = request;
        return this;
    }
    public CreateOrReplaceSalesTaxSecurity security;
    public CreateOrReplaceSalesTaxRequest withSecurity(CreateOrReplaceSalesTaxSecurity security) {
        this.security = security;
        return this;
    }
}