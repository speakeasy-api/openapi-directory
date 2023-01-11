package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchPropertySalesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchPropertySalesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchPropertySalesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchPropertySalesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchPropertySalesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchPropertySalesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchPropertySalesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchPropertySalesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchPropertySalesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchPropertySalesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchPropertySalesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchPropertySalesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchPropertySalesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchPropertySalesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchPropertySalesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.building_description")
    public String searchDbPropertySalesBuildingDescription;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesBuildingDescription(String searchDbPropertySalesBuildingDescription) {
        this.searchDbPropertySalesBuildingDescription = searchDbPropertySalesBuildingDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.building_design")
    public String searchDbPropertySalesBuildingDesign;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesBuildingDesign(String searchDbPropertySalesBuildingDesign) {
        this.searchDbPropertySalesBuildingDesign = searchDbPropertySalesBuildingDesign;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.buyer")
    public String searchDbPropertySalesBuyer;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesBuyer(String searchDbPropertySalesBuyer) {
        this.searchDbPropertySalesBuyer = searchDbPropertySalesBuyer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.city")
    public String searchDbPropertySalesCity;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesCity(String searchDbPropertySalesCity) {
        this.searchDbPropertySalesCity = searchDbPropertySalesCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.location")
    public String searchDbPropertySalesLocation;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesLocation(String searchDbPropertySalesLocation) {
        this.searchDbPropertySalesLocation = searchDbPropertySalesLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.property_address")
    public String searchDbPropertySalesPropertyAddress;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesPropertyAddress(String searchDbPropertySalesPropertyAddress) {
        this.searchDbPropertySalesPropertyAddress = searchDbPropertySalesPropertyAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.sale_date")
    public String searchDbPropertySalesSaleDate;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesSaleDate(String searchDbPropertySalesSaleDate) {
        this.searchDbPropertySalesSaleDate = searchDbPropertySalesSaleDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.sale_price")
    public Double searchDbPropertySalesSalePrice;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesSalePrice(Double searchDbPropertySalesSalePrice) {
        this.searchDbPropertySalesSalePrice = searchDbPropertySalesSalePrice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.seller")
    public String searchDbPropertySalesSeller;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesSeller(String searchDbPropertySalesSeller) {
        this.searchDbPropertySalesSeller = searchDbPropertySalesSeller;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.subdivision")
    public String searchDbPropertySalesSubdivision;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesSubdivision(String searchDbPropertySalesSubdivision) {
        this.searchDbPropertySalesSubdivision = searchDbPropertySalesSubdivision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.type")
    public String searchDbPropertySalesType;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesType(String searchDbPropertySalesType) {
        this.searchDbPropertySalesType = searchDbPropertySalesType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_property_sales.zipcode")
    public String searchDbPropertySalesZipcode;
    public SearchPropertySalesQueryParams withSearchDbPropertySalesZipcode(String searchDbPropertySalesZipcode) {
        this.searchDbPropertySalesZipcode = searchDbPropertySalesZipcode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchPropertySalesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchPropertySalesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchPropertySalesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}