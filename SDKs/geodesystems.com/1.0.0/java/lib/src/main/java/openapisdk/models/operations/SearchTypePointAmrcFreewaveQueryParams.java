package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypePointAmrcFreewaveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypePointAmrcFreewaveQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypePointAmrcFreewaveQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypePointAmrcFreewaveQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypePointAmrcFreewaveQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypePointAmrcFreewaveQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypePointAmrcFreewaveQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypePointAmrcFreewaveQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypePointAmrcFreewaveQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypePointAmrcFreewaveQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypePointAmrcFreewaveQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypePointAmrcFreewaveQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypePointAmrcFreewaveQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypePointAmrcFreewaveQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypePointAmrcFreewaveQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_amrc_freewave.datalogger_model")
    public String searchTypePointAmrcFreewaveDataloggerModel;
    public SearchTypePointAmrcFreewaveQueryParams withSearchTypePointAmrcFreewaveDataloggerModel(String searchTypePointAmrcFreewaveDataloggerModel) {
        this.searchTypePointAmrcFreewaveDataloggerModel = searchTypePointAmrcFreewaveDataloggerModel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_amrc_freewave.datalogger_serial")
    public String searchTypePointAmrcFreewaveDataloggerSerial;
    public SearchTypePointAmrcFreewaveQueryParams withSearchTypePointAmrcFreewaveDataloggerSerial(String searchTypePointAmrcFreewaveDataloggerSerial) {
        this.searchTypePointAmrcFreewaveDataloggerSerial = searchTypePointAmrcFreewaveDataloggerSerial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_amrc_freewave.format")
    public String searchTypePointAmrcFreewaveFormat;
    public SearchTypePointAmrcFreewaveQueryParams withSearchTypePointAmrcFreewaveFormat(String searchTypePointAmrcFreewaveFormat) {
        this.searchTypePointAmrcFreewaveFormat = searchTypePointAmrcFreewaveFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_point_amrc_freewave.station_name")
    public String searchTypePointAmrcFreewaveStationName;
    public SearchTypePointAmrcFreewaveQueryParams withSearchTypePointAmrcFreewaveStationName(String searchTypePointAmrcFreewaveStationName) {
        this.searchTypePointAmrcFreewaveStationName = searchTypePointAmrcFreewaveStationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypePointAmrcFreewaveQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypePointAmrcFreewaveQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypePointAmrcFreewaveQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}