package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchCampaignDonorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchCampaignDonorsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchCampaignDonorsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchCampaignDonorsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchCampaignDonorsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchCampaignDonorsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchCampaignDonorsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchCampaignDonorsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchCampaignDonorsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchCampaignDonorsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchCampaignDonorsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchCampaignDonorsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchCampaignDonorsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchCampaignDonorsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchCampaignDonorsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.amount")
    public Double searchDbCampaignDonorsAmount;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsAmount(Double searchDbCampaignDonorsAmount) {
        this.searchDbCampaignDonorsAmount = searchDbCampaignDonorsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.city")
    public String searchDbCampaignDonorsCity;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsCity(String searchDbCampaignDonorsCity) {
        this.searchDbCampaignDonorsCity = searchDbCampaignDonorsCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.committee")
    public String searchDbCampaignDonorsCommittee;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsCommittee(String searchDbCampaignDonorsCommittee) {
        this.searchDbCampaignDonorsCommittee = searchDbCampaignDonorsCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.date")
    public String searchDbCampaignDonorsDate;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsDate(String searchDbCampaignDonorsDate) {
        this.searchDbCampaignDonorsDate = searchDbCampaignDonorsDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.donor")
    public String searchDbCampaignDonorsDonor;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsDonor(String searchDbCampaignDonorsDonor) {
        this.searchDbCampaignDonorsDonor = searchDbCampaignDonorsDonor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.employer")
    public String searchDbCampaignDonorsEmployer;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsEmployer(String searchDbCampaignDonorsEmployer) {
        this.searchDbCampaignDonorsEmployer = searchDbCampaignDonorsEmployer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.gender")
    public String searchDbCampaignDonorsGender;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsGender(String searchDbCampaignDonorsGender) {
        this.searchDbCampaignDonorsGender = searchDbCampaignDonorsGender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.location")
    public String searchDbCampaignDonorsLocation;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsLocation(String searchDbCampaignDonorsLocation) {
        this.searchDbCampaignDonorsLocation = searchDbCampaignDonorsLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.occupation")
    public String searchDbCampaignDonorsOccupation;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsOccupation(String searchDbCampaignDonorsOccupation) {
        this.searchDbCampaignDonorsOccupation = searchDbCampaignDonorsOccupation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.party")
    public String searchDbCampaignDonorsParty;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsParty(String searchDbCampaignDonorsParty) {
        this.searchDbCampaignDonorsParty = searchDbCampaignDonorsParty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.state")
    public String searchDbCampaignDonorsState;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsState(String searchDbCampaignDonorsState) {
        this.searchDbCampaignDonorsState = searchDbCampaignDonorsState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_donors.zip_code")
    public String searchDbCampaignDonorsZipCode;
    public SearchCampaignDonorsQueryParams withSearchDbCampaignDonorsZipCode(String searchDbCampaignDonorsZipCode) {
        this.searchDbCampaignDonorsZipCode = searchDbCampaignDonorsZipCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchCampaignDonorsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchCampaignDonorsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchCampaignDonorsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}