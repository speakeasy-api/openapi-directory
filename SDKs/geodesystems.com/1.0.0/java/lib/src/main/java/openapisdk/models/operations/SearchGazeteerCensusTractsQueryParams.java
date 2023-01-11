package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchGazeteerCensusTractsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchGazeteerCensusTractsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchGazeteerCensusTractsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchGazeteerCensusTractsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchGazeteerCensusTractsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchGazeteerCensusTractsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchGazeteerCensusTractsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchGazeteerCensusTractsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchGazeteerCensusTractsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchGazeteerCensusTractsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchGazeteerCensusTractsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchGazeteerCensusTractsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchGazeteerCensusTractsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchGazeteerCensusTractsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchGazeteerCensusTractsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.census_tract_id")
    public String searchDbGazeteerCensusTractsCensusTractId;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsCensusTractId(String searchDbGazeteerCensusTractsCensusTractId) {
        this.searchDbGazeteerCensusTractsCensusTractId = searchDbGazeteerCensusTractsCensusTractId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.county_fips")
    public String searchDbGazeteerCensusTractsCountyFips;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsCountyFips(String searchDbGazeteerCensusTractsCountyFips) {
        this.searchDbGazeteerCensusTractsCountyFips = searchDbGazeteerCensusTractsCountyFips;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.county_name")
    public String searchDbGazeteerCensusTractsCountyName;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsCountyName(String searchDbGazeteerCensusTractsCountyName) {
        this.searchDbGazeteerCensusTractsCountyName = searchDbGazeteerCensusTractsCountyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.full_census_tract_id")
    public String searchDbGazeteerCensusTractsFullCensusTractId;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsFullCensusTractId(String searchDbGazeteerCensusTractsFullCensusTractId) {
        this.searchDbGazeteerCensusTractsFullCensusTractId = searchDbGazeteerCensusTractsFullCensusTractId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.land_area")
    public Double searchDbGazeteerCensusTractsLandArea;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsLandArea(Double searchDbGazeteerCensusTractsLandArea) {
        this.searchDbGazeteerCensusTractsLandArea = searchDbGazeteerCensusTractsLandArea;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.location")
    public String searchDbGazeteerCensusTractsLocation;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsLocation(String searchDbGazeteerCensusTractsLocation) {
        this.searchDbGazeteerCensusTractsLocation = searchDbGazeteerCensusTractsLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.state")
    public String searchDbGazeteerCensusTractsState;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsState(String searchDbGazeteerCensusTractsState) {
        this.searchDbGazeteerCensusTractsState = searchDbGazeteerCensusTractsState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.state_fips")
    public String searchDbGazeteerCensusTractsStateFips;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsStateFips(String searchDbGazeteerCensusTractsStateFips) {
        this.searchDbGazeteerCensusTractsStateFips = searchDbGazeteerCensusTractsStateFips;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_gazeteer_census_tracts.water_area")
    public Double searchDbGazeteerCensusTractsWaterArea;
    public SearchGazeteerCensusTractsQueryParams withSearchDbGazeteerCensusTractsWaterArea(Double searchDbGazeteerCensusTractsWaterArea) {
        this.searchDbGazeteerCensusTractsWaterArea = searchDbGazeteerCensusTractsWaterArea;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchGazeteerCensusTractsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchGazeteerCensusTractsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchGazeteerCensusTractsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}