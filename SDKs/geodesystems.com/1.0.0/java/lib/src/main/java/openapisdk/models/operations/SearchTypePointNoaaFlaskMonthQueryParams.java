package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypePointNoaaFlaskMonthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypePointNoaaFlaskMonthQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypePointNoaaFlaskMonthQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypePointNoaaFlaskMonthQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypePointNoaaFlaskMonthQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypePointNoaaFlaskMonthQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypePointNoaaFlaskMonthQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypePointNoaaFlaskMonthQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypePointNoaaFlaskMonthQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypePointNoaaFlaskMonthQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypePointNoaaFlaskMonthQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypePointNoaaFlaskMonthQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypePointNoaaFlaskMonthQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypePointNoaaFlaskMonthQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypePointNoaaFlaskMonthQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_month.lab_id_number")
    public String searchTypePointNoaaFlaskMonthLabIdNumber;
    public SearchTypePointNoaaFlaskMonthQueryParams withSearchTypePointNoaaFlaskMonthLabIdNumber(String searchTypePointNoaaFlaskMonthLabIdNumber) {
        this.searchTypePointNoaaFlaskMonthLabIdNumber = searchTypePointNoaaFlaskMonthLabIdNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_month.measurement_group")
    public String searchTypePointNoaaFlaskMonthMeasurementGroup;
    public SearchTypePointNoaaFlaskMonthQueryParams withSearchTypePointNoaaFlaskMonthMeasurementGroup(String searchTypePointNoaaFlaskMonthMeasurementGroup) {
        this.searchTypePointNoaaFlaskMonthMeasurementGroup = searchTypePointNoaaFlaskMonthMeasurementGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_month.parameter")
    public String searchTypePointNoaaFlaskMonthParameter;
    public SearchTypePointNoaaFlaskMonthQueryParams withSearchTypePointNoaaFlaskMonthParameter(String searchTypePointNoaaFlaskMonthParameter) {
        this.searchTypePointNoaaFlaskMonthParameter = searchTypePointNoaaFlaskMonthParameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_month.project")
    public String searchTypePointNoaaFlaskMonthProject;
    public SearchTypePointNoaaFlaskMonthQueryParams withSearchTypePointNoaaFlaskMonthProject(String searchTypePointNoaaFlaskMonthProject) {
        this.searchTypePointNoaaFlaskMonthProject = searchTypePointNoaaFlaskMonthProject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_month.site_id")
    public String searchTypePointNoaaFlaskMonthSiteId;
    public SearchTypePointNoaaFlaskMonthQueryParams withSearchTypePointNoaaFlaskMonthSiteId(String searchTypePointNoaaFlaskMonthSiteId) {
        this.searchTypePointNoaaFlaskMonthSiteId = searchTypePointNoaaFlaskMonthSiteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypePointNoaaFlaskMonthQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypePointNoaaFlaskMonthQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypePointNoaaFlaskMonthQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}