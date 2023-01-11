package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypePointNoaaFlaskEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypePointNoaaFlaskEventQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypePointNoaaFlaskEventQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypePointNoaaFlaskEventQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypePointNoaaFlaskEventQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypePointNoaaFlaskEventQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypePointNoaaFlaskEventQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypePointNoaaFlaskEventQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypePointNoaaFlaskEventQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypePointNoaaFlaskEventQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypePointNoaaFlaskEventQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypePointNoaaFlaskEventQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypePointNoaaFlaskEventQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypePointNoaaFlaskEventQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypePointNoaaFlaskEventQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_event.lab_id_number")
    public String searchTypePointNoaaFlaskEventLabIdNumber;
    public SearchTypePointNoaaFlaskEventQueryParams withSearchTypePointNoaaFlaskEventLabIdNumber(String searchTypePointNoaaFlaskEventLabIdNumber) {
        this.searchTypePointNoaaFlaskEventLabIdNumber = searchTypePointNoaaFlaskEventLabIdNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_event.measurement_group")
    public String searchTypePointNoaaFlaskEventMeasurementGroup;
    public SearchTypePointNoaaFlaskEventQueryParams withSearchTypePointNoaaFlaskEventMeasurementGroup(String searchTypePointNoaaFlaskEventMeasurementGroup) {
        this.searchTypePointNoaaFlaskEventMeasurementGroup = searchTypePointNoaaFlaskEventMeasurementGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_event.parameter")
    public String searchTypePointNoaaFlaskEventParameter;
    public SearchTypePointNoaaFlaskEventQueryParams withSearchTypePointNoaaFlaskEventParameter(String searchTypePointNoaaFlaskEventParameter) {
        this.searchTypePointNoaaFlaskEventParameter = searchTypePointNoaaFlaskEventParameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_event.project")
    public String searchTypePointNoaaFlaskEventProject;
    public SearchTypePointNoaaFlaskEventQueryParams withSearchTypePointNoaaFlaskEventProject(String searchTypePointNoaaFlaskEventProject) {
        this.searchTypePointNoaaFlaskEventProject = searchTypePointNoaaFlaskEventProject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_flask_event.site_id")
    public String searchTypePointNoaaFlaskEventSiteId;
    public SearchTypePointNoaaFlaskEventQueryParams withSearchTypePointNoaaFlaskEventSiteId(String searchTypePointNoaaFlaskEventSiteId) {
        this.searchTypePointNoaaFlaskEventSiteId = searchTypePointNoaaFlaskEventSiteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypePointNoaaFlaskEventQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypePointNoaaFlaskEventQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypePointNoaaFlaskEventQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}