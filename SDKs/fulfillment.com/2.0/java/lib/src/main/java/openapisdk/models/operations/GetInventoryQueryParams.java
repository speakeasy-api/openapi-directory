package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInventoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=externalSkuNames")
    public String[] externalSkuNames;
    public GetInventoryQueryParams withExternalSkuNames(String[] externalSkuNames) {
        this.externalSkuNames = externalSkuNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetInventoryQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=merchantIds")
    public Long[] merchantIds;
    public GetInventoryQueryParams withMerchantIds(Long[] merchantIds) {
        this.merchantIds = merchantIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetInventoryQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
}