package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypePointPboPositionTimeSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypePointPboPositionTimeSeriesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypePointPboPositionTimeSeriesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypePointPboPositionTimeSeriesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypePointPboPositionTimeSeriesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypePointPboPositionTimeSeriesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypePointPboPositionTimeSeriesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypePointPboPositionTimeSeriesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypePointPboPositionTimeSeriesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypePointPboPositionTimeSeriesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypePointPboPositionTimeSeriesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypePointPboPositionTimeSeriesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypePointPboPositionTimeSeriesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypePointPboPositionTimeSeriesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypePointPboPositionTimeSeriesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_pbo_position_time_series.format_version")
    public String searchTypePointPboPositionTimeSeriesFormatVersion;
    public SearchTypePointPboPositionTimeSeriesQueryParams withSearchTypePointPboPositionTimeSeriesFormatVersion(String searchTypePointPboPositionTimeSeriesFormatVersion) {
        this.searchTypePointPboPositionTimeSeriesFormatVersion = searchTypePointPboPositionTimeSeriesFormatVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_pbo_position_time_series.four_char_id")
    public String searchTypePointPboPositionTimeSeriesFourCharId;
    public SearchTypePointPboPositionTimeSeriesQueryParams withSearchTypePointPboPositionTimeSeriesFourCharId(String searchTypePointPboPositionTimeSeriesFourCharId) {
        this.searchTypePointPboPositionTimeSeriesFourCharId = searchTypePointPboPositionTimeSeriesFourCharId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_pbo_position_time_series.processing_center")
    public String searchTypePointPboPositionTimeSeriesProcessingCenter;
    public SearchTypePointPboPositionTimeSeriesQueryParams withSearchTypePointPboPositionTimeSeriesProcessingCenter(String searchTypePointPboPositionTimeSeriesProcessingCenter) {
        this.searchTypePointPboPositionTimeSeriesProcessingCenter = searchTypePointPboPositionTimeSeriesProcessingCenter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_pbo_position_time_series.reference_frame")
    public String searchTypePointPboPositionTimeSeriesReferenceFrame;
    public SearchTypePointPboPositionTimeSeriesQueryParams withSearchTypePointPboPositionTimeSeriesReferenceFrame(String searchTypePointPboPositionTimeSeriesReferenceFrame) {
        this.searchTypePointPboPositionTimeSeriesReferenceFrame = searchTypePointPboPositionTimeSeriesReferenceFrame;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_pbo_position_time_series.station_name")
    public String searchTypePointPboPositionTimeSeriesStationName;
    public SearchTypePointPboPositionTimeSeriesQueryParams withSearchTypePointPboPositionTimeSeriesStationName(String searchTypePointPboPositionTimeSeriesStationName) {
        this.searchTypePointPboPositionTimeSeriesStationName = searchTypePointPboPositionTimeSeriesStationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypePointPboPositionTimeSeriesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypePointPboPositionTimeSeriesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypePointPboPositionTimeSeriesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}