package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV3PurchasedAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company_purchases")
    public Boolean companyPurchases;
    public GetV3PurchasedAssetsQueryParams withCompanyPurchases(Boolean companyPurchases) {
        this.companyPurchases = companyPurchases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public OffsetDateTime dateFrom;
    public GetV3PurchasedAssetsQueryParams withDateFrom(OffsetDateTime dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public OffsetDateTime dateTo;
    public GetV3PurchasedAssetsQueryParams withDateTo(OffsetDateTime dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3PurchasedAssetsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3PurchasedAssetsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}