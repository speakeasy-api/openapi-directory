package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchDbCoIndicatorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchDbCoIndicatorsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchDbCoIndicatorsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchDbCoIndicatorsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchDbCoIndicatorsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchDbCoIndicatorsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchDbCoIndicatorsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchDbCoIndicatorsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchDbCoIndicatorsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchDbCoIndicatorsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchDbCoIndicatorsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchDbCoIndicatorsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchDbCoIndicatorsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchDbCoIndicatorsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchDbCoIndicatorsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.description")
    public String searchDbDbCoIndicatorsDescription;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsDescription(String searchDbDbCoIndicatorsDescription) {
        this.searchDbDbCoIndicatorsDescription = searchDbDbCoIndicatorsDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.domain")
    public String searchDbDbCoIndicatorsDomain;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsDomain(String searchDbDbCoIndicatorsDomain) {
        this.searchDbDbCoIndicatorsDomain = searchDbDbCoIndicatorsDomain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.geo_name")
    public String searchDbDbCoIndicatorsGeoName;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsGeoName(String searchDbDbCoIndicatorsGeoName) {
        this.searchDbDbCoIndicatorsGeoName = searchDbDbCoIndicatorsGeoName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.indicatorName")
    public String searchDbDbCoIndicatorsIndicatorName;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsIndicatorName(String searchDbDbCoIndicatorsIndicatorName) {
        this.searchDbDbCoIndicatorsIndicatorName = searchDbDbCoIndicatorsIndicatorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.location")
    public String searchDbDbCoIndicatorsLocation;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsLocation(String searchDbDbCoIndicatorsLocation) {
        this.searchDbDbCoIndicatorsLocation = searchDbDbCoIndicatorsLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.measure")
    public Double searchDbDbCoIndicatorsMeasure;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsMeasure(Double searchDbDbCoIndicatorsMeasure) {
        this.searchDbDbCoIndicatorsMeasure = searchDbDbCoIndicatorsMeasure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_db_co_indicators.subdomain")
    public String searchDbDbCoIndicatorsSubdomain;
    public SearchDbCoIndicatorsQueryParams withSearchDbDbCoIndicatorsSubdomain(String searchDbDbCoIndicatorsSubdomain) {
        this.searchDbDbCoIndicatorsSubdomain = searchDbDbCoIndicatorsSubdomain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchDbCoIndicatorsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchDbCoIndicatorsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchDbCoIndicatorsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}