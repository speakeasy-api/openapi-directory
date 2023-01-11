package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchEarthSatelliteLandsatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchEarthSatelliteLandsatQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchEarthSatelliteLandsatQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchEarthSatelliteLandsatQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchEarthSatelliteLandsatQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchEarthSatelliteLandsatQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchEarthSatelliteLandsatQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchEarthSatelliteLandsatQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchEarthSatelliteLandsatQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchEarthSatelliteLandsatQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchEarthSatelliteLandsatQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchEarthSatelliteLandsatQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchEarthSatelliteLandsatQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchEarthSatelliteLandsatQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchEarthSatelliteLandsatQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.earth_satellite_landsat.archive_version_number")
    public Long searchEarthSatelliteLandsatArchiveVersionNumber;
    public SearchEarthSatelliteLandsatQueryParams withSearchEarthSatelliteLandsatArchiveVersionNumber(Long searchEarthSatelliteLandsatArchiveVersionNumber) {
        this.searchEarthSatelliteLandsatArchiveVersionNumber = searchEarthSatelliteLandsatArchiveVersionNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.earth_satellite_landsat.ground_station")
    public String searchEarthSatelliteLandsatGroundStation;
    public SearchEarthSatelliteLandsatQueryParams withSearchEarthSatelliteLandsatGroundStation(String searchEarthSatelliteLandsatGroundStation) {
        this.searchEarthSatelliteLandsatGroundStation = searchEarthSatelliteLandsatGroundStation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.earth_satellite_landsat.satellite")
    public String searchEarthSatelliteLandsatSatellite;
    public SearchEarthSatelliteLandsatQueryParams withSearchEarthSatelliteLandsatSatellite(String searchEarthSatelliteLandsatSatellite) {
        this.searchEarthSatelliteLandsatSatellite = searchEarthSatelliteLandsatSatellite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.earth_satellite_landsat.sensor")
    public String searchEarthSatelliteLandsatSensor;
    public SearchEarthSatelliteLandsatQueryParams withSearchEarthSatelliteLandsatSensor(String searchEarthSatelliteLandsatSensor) {
        this.searchEarthSatelliteLandsatSensor = searchEarthSatelliteLandsatSensor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.earth_satellite_landsat.wrs_path_number")
    public Long searchEarthSatelliteLandsatWrsPathNumber;
    public SearchEarthSatelliteLandsatQueryParams withSearchEarthSatelliteLandsatWrsPathNumber(Long searchEarthSatelliteLandsatWrsPathNumber) {
        this.searchEarthSatelliteLandsatWrsPathNumber = searchEarthSatelliteLandsatWrsPathNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.earth_satellite_landsat.wrs_row_number")
    public Long searchEarthSatelliteLandsatWrsRowNumber;
    public SearchEarthSatelliteLandsatQueryParams withSearchEarthSatelliteLandsatWrsRowNumber(Long searchEarthSatelliteLandsatWrsRowNumber) {
        this.searchEarthSatelliteLandsatWrsRowNumber = searchEarthSatelliteLandsatWrsRowNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchEarthSatelliteLandsatQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchEarthSatelliteLandsatQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchEarthSatelliteLandsatQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}