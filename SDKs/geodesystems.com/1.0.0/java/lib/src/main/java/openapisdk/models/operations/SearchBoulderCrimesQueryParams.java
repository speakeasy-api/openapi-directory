package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBoulderCrimesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBoulderCrimesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBoulderCrimesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBoulderCrimesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBoulderCrimesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBoulderCrimesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBoulderCrimesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBoulderCrimesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBoulderCrimesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBoulderCrimesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBoulderCrimesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBoulderCrimesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBoulderCrimesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBoulderCrimesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBoulderCrimesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_crimes.blockadd")
    public String searchDbBoulderCrimesBlockadd;
    public SearchBoulderCrimesQueryParams withSearchDbBoulderCrimesBlockadd(String searchDbBoulderCrimesBlockadd) {
        this.searchDbBoulderCrimesBlockadd = searchDbBoulderCrimesBlockadd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_crimes.location")
    public String searchDbBoulderCrimesLocation;
    public SearchBoulderCrimesQueryParams withSearchDbBoulderCrimesLocation(String searchDbBoulderCrimesLocation) {
        this.searchDbBoulderCrimesLocation = searchDbBoulderCrimesLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_crimes.offense")
    public String searchDbBoulderCrimesOffense;
    public SearchBoulderCrimesQueryParams withSearchDbBoulderCrimesOffense(String searchDbBoulderCrimesOffense) {
        this.searchDbBoulderCrimesOffense = searchDbBoulderCrimesOffense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_crimes.reportdate")
    public String searchDbBoulderCrimesReportdate;
    public SearchBoulderCrimesQueryParams withSearchDbBoulderCrimesReportdate(String searchDbBoulderCrimesReportdate) {
        this.searchDbBoulderCrimesReportdate = searchDbBoulderCrimesReportdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBoulderCrimesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBoulderCrimesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBoulderCrimesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}