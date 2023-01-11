package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypePointNoaaCarbonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypePointNoaaCarbonQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypePointNoaaCarbonQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypePointNoaaCarbonQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypePointNoaaCarbonQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypePointNoaaCarbonQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypePointNoaaCarbonQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypePointNoaaCarbonQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypePointNoaaCarbonQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypePointNoaaCarbonQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypePointNoaaCarbonQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypePointNoaaCarbonQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypePointNoaaCarbonQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypePointNoaaCarbonQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypePointNoaaCarbonQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_carbon.lab_id_number")
    public String searchTypePointNoaaCarbonLabIdNumber;
    public SearchTypePointNoaaCarbonQueryParams withSearchTypePointNoaaCarbonLabIdNumber(String searchTypePointNoaaCarbonLabIdNumber) {
        this.searchTypePointNoaaCarbonLabIdNumber = searchTypePointNoaaCarbonLabIdNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_carbon.measurement_group")
    public String searchTypePointNoaaCarbonMeasurementGroup;
    public SearchTypePointNoaaCarbonQueryParams withSearchTypePointNoaaCarbonMeasurementGroup(String searchTypePointNoaaCarbonMeasurementGroup) {
        this.searchTypePointNoaaCarbonMeasurementGroup = searchTypePointNoaaCarbonMeasurementGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_carbon.parameter")
    public String searchTypePointNoaaCarbonParameter;
    public SearchTypePointNoaaCarbonQueryParams withSearchTypePointNoaaCarbonParameter(String searchTypePointNoaaCarbonParameter) {
        this.searchTypePointNoaaCarbonParameter = searchTypePointNoaaCarbonParameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_carbon.project")
    public String searchTypePointNoaaCarbonProject;
    public SearchTypePointNoaaCarbonQueryParams withSearchTypePointNoaaCarbonProject(String searchTypePointNoaaCarbonProject) {
        this.searchTypePointNoaaCarbonProject = searchTypePointNoaaCarbonProject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_noaa_carbon.site_id")
    public String searchTypePointNoaaCarbonSiteId;
    public SearchTypePointNoaaCarbonQueryParams withSearchTypePointNoaaCarbonSiteId(String searchTypePointNoaaCarbonSiteId) {
        this.searchTypePointNoaaCarbonSiteId = searchTypePointNoaaCarbonSiteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypePointNoaaCarbonQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypePointNoaaCarbonQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypePointNoaaCarbonQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}