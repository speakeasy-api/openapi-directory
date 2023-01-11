package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchCommitteeDonationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchCommitteeDonationsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchCommitteeDonationsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchCommitteeDonationsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchCommitteeDonationsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchCommitteeDonationsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchCommitteeDonationsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchCommitteeDonationsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchCommitteeDonationsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchCommitteeDonationsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchCommitteeDonationsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchCommitteeDonationsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchCommitteeDonationsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchCommitteeDonationsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchCommitteeDonationsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.amount")
    public Double searchDbCommitteeDonationsAmount;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsAmount(Double searchDbCommitteeDonationsAmount) {
        this.searchDbCommitteeDonationsAmount = searchDbCommitteeDonationsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.city")
    public String searchDbCommitteeDonationsCity;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsCity(String searchDbCommitteeDonationsCity) {
        this.searchDbCommitteeDonationsCity = searchDbCommitteeDonationsCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.committee")
    public String searchDbCommitteeDonationsCommittee;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsCommittee(String searchDbCommitteeDonationsCommittee) {
        this.searchDbCommitteeDonationsCommittee = searchDbCommitteeDonationsCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.date")
    public String searchDbCommitteeDonationsDate;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsDate(String searchDbCommitteeDonationsDate) {
        this.searchDbCommitteeDonationsDate = searchDbCommitteeDonationsDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.employer")
    public String searchDbCommitteeDonationsEmployer;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsEmployer(String searchDbCommitteeDonationsEmployer) {
        this.searchDbCommitteeDonationsEmployer = searchDbCommitteeDonationsEmployer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.location")
    public String searchDbCommitteeDonationsLocation;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsLocation(String searchDbCommitteeDonationsLocation) {
        this.searchDbCommitteeDonationsLocation = searchDbCommitteeDonationsLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.occupation")
    public String searchDbCommitteeDonationsOccupation;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsOccupation(String searchDbCommitteeDonationsOccupation) {
        this.searchDbCommitteeDonationsOccupation = searchDbCommitteeDonationsOccupation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.recipient")
    public String searchDbCommitteeDonationsRecipient;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsRecipient(String searchDbCommitteeDonationsRecipient) {
        this.searchDbCommitteeDonationsRecipient = searchDbCommitteeDonationsRecipient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.state")
    public String searchDbCommitteeDonationsState;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsState(String searchDbCommitteeDonationsState) {
        this.searchDbCommitteeDonationsState = searchDbCommitteeDonationsState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_committee_donations.zip_code")
    public String searchDbCommitteeDonationsZipCode;
    public SearchCommitteeDonationsQueryParams withSearchDbCommitteeDonationsZipCode(String searchDbCommitteeDonationsZipCode) {
        this.searchDbCommitteeDonationsZipCode = searchDbCommitteeDonationsZipCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchCommitteeDonationsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchCommitteeDonationsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchCommitteeDonationsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}