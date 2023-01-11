package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV3DownloadsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company_downloads")
    public Boolean companyDownloads;
    public GetV3DownloadsQueryParams withCompanyDownloads(Boolean companyDownloads) {
        this.companyDownloads = companyDownloads;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public OffsetDateTime dateFrom;
    public GetV3DownloadsQueryParams withDateFrom(OffsetDateTime dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public OffsetDateTime dateTo;
    public GetV3DownloadsQueryParams withDateTo(OffsetDateTime dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3DownloadsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3DownloadsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_type")
    public openapisdk.models.shared.ProductTypeRequestEnum productType;
    public GetV3DownloadsQueryParams withProductType(openapisdk.models.shared.ProductTypeRequestEnum productType) {
        this.productType = productType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_time")
    public Boolean useTime;
    public GetV3DownloadsQueryParams withUseTime(Boolean useTime) {
        this.useTime = useTime;
        return this;
    }
}