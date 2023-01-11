package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetOrdersQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=hydrate")
    public openapisdk.models.shared.HydrateParamEnum[] hydrate;
    public GetOrdersQueryParams withHydrate(openapisdk.models.shared.HydrateParamEnum[] hydrate) {
        this.hydrate = hydrate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetOrdersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=merchantIds")
    public Long[] merchantIds;
    public GetOrdersQueryParams withMerchantIds(Long[] merchantIds) {
        this.merchantIds = merchantIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetOrdersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetOrdersQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=warehouseIds")
    public Long[] warehouseIds;
    public GetOrdersQueryParams withWarehouseIds(Long[] warehouseIds) {
        this.warehouseIds = warehouseIds;
        return this;
    }
}