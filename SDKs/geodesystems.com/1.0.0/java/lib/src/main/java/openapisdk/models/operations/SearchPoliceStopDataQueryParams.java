package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchPoliceStopDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchPoliceStopDataQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchPoliceStopDataQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchPoliceStopDataQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchPoliceStopDataQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchPoliceStopDataQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchPoliceStopDataQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchPoliceStopDataQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchPoliceStopDataQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchPoliceStopDataQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchPoliceStopDataQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchPoliceStopDataQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchPoliceStopDataQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchPoliceStopDataQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchPoliceStopDataQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.address")
    public String searchDbPoliceStopDataAddress;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataAddress(String searchDbPoliceStopDataAddress) {
        this.searchDbPoliceStopDataAddress = searchDbPoliceStopDataAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.date")
    public String searchDbPoliceStopDataDate;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataDate(String searchDbPoliceStopDataDate) {
        this.searchDbPoliceStopDataDate = searchDbPoliceStopDataDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.ethnicity")
    public String searchDbPoliceStopDataEthnicity;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataEthnicity(String searchDbPoliceStopDataEthnicity) {
        this.searchDbPoliceStopDataEthnicity = searchDbPoliceStopDataEthnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.minutes")
    public Long searchDbPoliceStopDataMinutes;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataMinutes(Long searchDbPoliceStopDataMinutes) {
        this.searchDbPoliceStopDataMinutes = searchDbPoliceStopDataMinutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.race")
    public String searchDbPoliceStopDataRace;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataRace(String searchDbPoliceStopDataRace) {
        this.searchDbPoliceStopDataRace = searchDbPoliceStopDataRace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.resident")
    public String searchDbPoliceStopDataResident;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataResident(String searchDbPoliceStopDataResident) {
        this.searchDbPoliceStopDataResident = searchDbPoliceStopDataResident;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_police_stop_data.sex")
    public String searchDbPoliceStopDataSex;
    public SearchPoliceStopDataQueryParams withSearchDbPoliceStopDataSex(String searchDbPoliceStopDataSex) {
        this.searchDbPoliceStopDataSex = searchDbPoliceStopDataSex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchPoliceStopDataQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchPoliceStopDataQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchPoliceStopDataQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}