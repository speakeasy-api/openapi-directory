package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBostonCrimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBostonCrimeQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBostonCrimeQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBostonCrimeQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBostonCrimeQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBostonCrimeQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBostonCrimeQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBostonCrimeQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBostonCrimeQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBostonCrimeQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBostonCrimeQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBostonCrimeQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBostonCrimeQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBostonCrimeQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBostonCrimeQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.day_of_week")
    public String searchDbBostonCrimeDayOfWeek;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeDayOfWeek(String searchDbBostonCrimeDayOfWeek) {
        this.searchDbBostonCrimeDayOfWeek = searchDbBostonCrimeDayOfWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.district")
    public String searchDbBostonCrimeDistrict;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeDistrict(String searchDbBostonCrimeDistrict) {
        this.searchDbBostonCrimeDistrict = searchDbBostonCrimeDistrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.hour")
    public Double searchDbBostonCrimeHour;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeHour(Double searchDbBostonCrimeHour) {
        this.searchDbBostonCrimeHour = searchDbBostonCrimeHour;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.location")
    public String searchDbBostonCrimeLocation;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeLocation(String searchDbBostonCrimeLocation) {
        this.searchDbBostonCrimeLocation = searchDbBostonCrimeLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.month")
    public Double searchDbBostonCrimeMonth;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeMonth(Double searchDbBostonCrimeMonth) {
        this.searchDbBostonCrimeMonth = searchDbBostonCrimeMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.offense")
    public String searchDbBostonCrimeOffense;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeOffense(String searchDbBostonCrimeOffense) {
        this.searchDbBostonCrimeOffense = searchDbBostonCrimeOffense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.offense_code_group")
    public String searchDbBostonCrimeOffenseCodeGroup;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeOffenseCodeGroup(String searchDbBostonCrimeOffenseCodeGroup) {
        this.searchDbBostonCrimeOffenseCodeGroup = searchDbBostonCrimeOffenseCodeGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.offense_description")
    public String searchDbBostonCrimeOffenseDescription;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeOffenseDescription(String searchDbBostonCrimeOffenseDescription) {
        this.searchDbBostonCrimeOffenseDescription = searchDbBostonCrimeOffenseDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.reporting_area")
    public String searchDbBostonCrimeReportingArea;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeReportingArea(String searchDbBostonCrimeReportingArea) {
        this.searchDbBostonCrimeReportingArea = searchDbBostonCrimeReportingArea;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.shooting")
    public String searchDbBostonCrimeShooting;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeShooting(String searchDbBostonCrimeShooting) {
        this.searchDbBostonCrimeShooting = searchDbBostonCrimeShooting;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.street")
    public String searchDbBostonCrimeStreet;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeStreet(String searchDbBostonCrimeStreet) {
        this.searchDbBostonCrimeStreet = searchDbBostonCrimeStreet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boston_crime.year")
    public Double searchDbBostonCrimeYear;
    public SearchBostonCrimeQueryParams withSearchDbBostonCrimeYear(Double searchDbBostonCrimeYear) {
        this.searchDbBostonCrimeYear = searchDbBostonCrimeYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBostonCrimeQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBostonCrimeQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBostonCrimeQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}