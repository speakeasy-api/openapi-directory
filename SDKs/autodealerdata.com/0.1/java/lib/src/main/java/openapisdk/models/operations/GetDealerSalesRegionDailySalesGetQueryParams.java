package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerSalesRegionDailySalesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetDealerSalesRegionDailySalesGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=day")
    public LocalDate day;
    public GetDealerSalesRegionDailySalesGetQueryParams withDay(LocalDate day) {
        this.day = day;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetDealerSalesRegionDailySalesGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetDealerSalesRegionDailySalesGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}