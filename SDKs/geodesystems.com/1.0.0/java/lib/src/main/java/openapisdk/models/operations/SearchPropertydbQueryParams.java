package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchPropertydbQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchPropertydbQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchPropertydbQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchPropertydbQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchPropertydbQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchPropertydbQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchPropertydbQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchPropertydbQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchPropertydbQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchPropertydbQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchPropertydbQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchPropertydbQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchPropertydbQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchPropertydbQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchPropertydbQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.address")
    public String searchDbPropertydbAddress;
    public SearchPropertydbQueryParams withSearchDbPropertydbAddress(String searchDbPropertydbAddress) {
        this.searchDbPropertydbAddress = searchDbPropertydbAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.building_type")
    public String searchDbPropertydbBuildingType;
    public SearchPropertydbQueryParams withSearchDbPropertydbBuildingType(String searchDbPropertydbBuildingType) {
        this.searchDbPropertydbBuildingType = searchDbPropertydbBuildingType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.city")
    public String searchDbPropertydbCity;
    public SearchPropertydbQueryParams withSearchDbPropertydbCity(String searchDbPropertydbCity) {
        this.searchDbPropertydbCity = searchDbPropertydbCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.house_size")
    public Long searchDbPropertydbHouseSize;
    public SearchPropertydbQueryParams withSearchDbPropertydbHouseSize(Long searchDbPropertydbHouseSize) {
        this.searchDbPropertydbHouseSize = searchDbPropertydbHouseSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.location")
    public String searchDbPropertydbLocation;
    public SearchPropertydbQueryParams withSearchDbPropertydbLocation(String searchDbPropertydbLocation) {
        this.searchDbPropertydbLocation = searchDbPropertydbLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.lot_acres")
    public Double searchDbPropertydbLotAcres;
    public SearchPropertydbQueryParams withSearchDbPropertydbLotAcres(Double searchDbPropertydbLotAcres) {
        this.searchDbPropertydbLotAcres = searchDbPropertydbLotAcres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.lot_sqft")
    public Long searchDbPropertydbLotSqft;
    public SearchPropertydbQueryParams withSearchDbPropertydbLotSqft(Long searchDbPropertydbLotSqft) {
        this.searchDbPropertydbLotSqft = searchDbPropertydbLotSqft;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.owner")
    public String searchDbPropertydbOwner;
    public SearchPropertydbQueryParams withSearchDbPropertydbOwner(String searchDbPropertydbOwner) {
        this.searchDbPropertydbOwner = searchDbPropertydbOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.price_sqft")
    public Double searchDbPropertydbPriceSqft;
    public SearchPropertydbQueryParams withSearchDbPropertydbPriceSqft(Double searchDbPropertydbPriceSqft) {
        this.searchDbPropertydbPriceSqft = searchDbPropertydbPriceSqft;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.property_id")
    public String searchDbPropertydbPropertyId;
    public SearchPropertydbQueryParams withSearchDbPropertydbPropertyId(String searchDbPropertydbPropertyId) {
        this.searchDbPropertydbPropertyId = searchDbPropertydbPropertyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.state")
    public String searchDbPropertydbState;
    public SearchPropertydbQueryParams withSearchDbPropertydbState(String searchDbPropertydbState) {
        this.searchDbPropertydbState = searchDbPropertydbState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_propertydb.value")
    public Long searchDbPropertydbValue;
    public SearchPropertydbQueryParams withSearchDbPropertydbValue(Long searchDbPropertydbValue) {
        this.searchDbPropertydbValue = searchDbPropertydbValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchPropertydbQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchPropertydbQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchPropertydbQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}