package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerSalesRegionSalesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetDealerSalesRegionSalesGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetDealerSalesRegionSalesGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public LocalDate month;
    public GetDealerSalesRegionSalesGetQueryParams withMonth(LocalDate month) {
        this.month = month;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetDealerSalesRegionSalesGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}