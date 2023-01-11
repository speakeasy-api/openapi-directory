package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchUfoSightingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchUfoSightingsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchUfoSightingsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchUfoSightingsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchUfoSightingsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchUfoSightingsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchUfoSightingsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchUfoSightingsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchUfoSightingsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchUfoSightingsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchUfoSightingsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchUfoSightingsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchUfoSightingsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchUfoSightingsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchUfoSightingsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.city")
    public String searchDbUfoSightingsCity;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsCity(String searchDbUfoSightingsCity) {
        this.searchDbUfoSightingsCity = searchDbUfoSightingsCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.comments")
    public String searchDbUfoSightingsComments;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsComments(String searchDbUfoSightingsComments) {
        this.searchDbUfoSightingsComments = searchDbUfoSightingsComments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.country")
    public String searchDbUfoSightingsCountry;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsCountry(String searchDbUfoSightingsCountry) {
        this.searchDbUfoSightingsCountry = searchDbUfoSightingsCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.date_posted")
    public String searchDbUfoSightingsDatePosted;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsDatePosted(String searchDbUfoSightingsDatePosted) {
        this.searchDbUfoSightingsDatePosted = searchDbUfoSightingsDatePosted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.datetime")
    public String searchDbUfoSightingsDatetime;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsDatetime(String searchDbUfoSightingsDatetime) {
        this.searchDbUfoSightingsDatetime = searchDbUfoSightingsDatetime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.duration_hours_min")
    public String searchDbUfoSightingsDurationHoursMin;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsDurationHoursMin(String searchDbUfoSightingsDurationHoursMin) {
        this.searchDbUfoSightingsDurationHoursMin = searchDbUfoSightingsDurationHoursMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.duration_seconds")
    public Double searchDbUfoSightingsDurationSeconds;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsDurationSeconds(Double searchDbUfoSightingsDurationSeconds) {
        this.searchDbUfoSightingsDurationSeconds = searchDbUfoSightingsDurationSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.latitude")
    public Double searchDbUfoSightingsLatitude;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsLatitude(Double searchDbUfoSightingsLatitude) {
        this.searchDbUfoSightingsLatitude = searchDbUfoSightingsLatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.longitude")
    public Double searchDbUfoSightingsLongitude;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsLongitude(Double searchDbUfoSightingsLongitude) {
        this.searchDbUfoSightingsLongitude = searchDbUfoSightingsLongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.shape")
    public String searchDbUfoSightingsShape;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsShape(String searchDbUfoSightingsShape) {
        this.searchDbUfoSightingsShape = searchDbUfoSightingsShape;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_ufo_sightings.state")
    public String searchDbUfoSightingsState;
    public SearchUfoSightingsQueryParams withSearchDbUfoSightingsState(String searchDbUfoSightingsState) {
        this.searchDbUfoSightingsState = searchDbUfoSightingsState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchUfoSightingsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchUfoSightingsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchUfoSightingsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}