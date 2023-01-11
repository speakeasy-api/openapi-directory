package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchGeoGpxQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchGeoGpxQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchGeoGpxQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchGeoGpxQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchGeoGpxQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchGeoGpxQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchGeoGpxQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchGeoGpxQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchGeoGpxQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchGeoGpxQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchGeoGpxQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchGeoGpxQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchGeoGpxQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchGeoGpxQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchGeoGpxQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.geo_gpx.distance")
    public Double searchGeoGpxDistance;
    public SearchGeoGpxQueryParams withSearchGeoGpxDistance(Double searchGeoGpxDistance) {
        this.searchGeoGpxDistance = searchGeoGpxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.geo_gpx.elevation_gain")
    public Double searchGeoGpxElevationGain;
    public SearchGeoGpxQueryParams withSearchGeoGpxElevationGain(Double searchGeoGpxElevationGain) {
        this.searchGeoGpxElevationGain = searchGeoGpxElevationGain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.geo_gpx.elevation_loss")
    public Double searchGeoGpxElevationLoss;
    public SearchGeoGpxQueryParams withSearchGeoGpxElevationLoss(Double searchGeoGpxElevationLoss) {
        this.searchGeoGpxElevationLoss = searchGeoGpxElevationLoss;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.geo_gpx.moving_time")
    public Double searchGeoGpxMovingTime;
    public SearchGeoGpxQueryParams withSearchGeoGpxMovingTime(Double searchGeoGpxMovingTime) {
        this.searchGeoGpxMovingTime = searchGeoGpxMovingTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.geo_gpx.speed")
    public Double searchGeoGpxSpeed;
    public SearchGeoGpxQueryParams withSearchGeoGpxSpeed(Double searchGeoGpxSpeed) {
        this.searchGeoGpxSpeed = searchGeoGpxSpeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.geo_gpx.total_time")
    public Double searchGeoGpxTotalTime;
    public SearchGeoGpxQueryParams withSearchGeoGpxTotalTime(Double searchGeoGpxTotalTime) {
        this.searchGeoGpxTotalTime = searchGeoGpxTotalTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchGeoGpxQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchGeoGpxQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchGeoGpxQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}