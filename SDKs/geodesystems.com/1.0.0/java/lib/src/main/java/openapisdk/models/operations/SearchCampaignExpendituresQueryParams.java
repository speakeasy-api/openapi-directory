package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchCampaignExpendituresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchCampaignExpendituresQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchCampaignExpendituresQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchCampaignExpendituresQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchCampaignExpendituresQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchCampaignExpendituresQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchCampaignExpendituresQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchCampaignExpendituresQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchCampaignExpendituresQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchCampaignExpendituresQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchCampaignExpendituresQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchCampaignExpendituresQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchCampaignExpendituresQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchCampaignExpendituresQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchCampaignExpendituresQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.amount")
    public Double searchDbCampaignExpendituresAmount;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresAmount(Double searchDbCampaignExpendituresAmount) {
        this.searchDbCampaignExpendituresAmount = searchDbCampaignExpendituresAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.city")
    public String searchDbCampaignExpendituresCity;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresCity(String searchDbCampaignExpendituresCity) {
        this.searchDbCampaignExpendituresCity = searchDbCampaignExpendituresCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.committee")
    public String searchDbCampaignExpendituresCommittee;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresCommittee(String searchDbCampaignExpendituresCommittee) {
        this.searchDbCampaignExpendituresCommittee = searchDbCampaignExpendituresCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.location")
    public String searchDbCampaignExpendituresLocation;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresLocation(String searchDbCampaignExpendituresLocation) {
        this.searchDbCampaignExpendituresLocation = searchDbCampaignExpendituresLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.memo_text")
    public String searchDbCampaignExpendituresMemoText;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresMemoText(String searchDbCampaignExpendituresMemoText) {
        this.searchDbCampaignExpendituresMemoText = searchDbCampaignExpendituresMemoText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.party")
    public String searchDbCampaignExpendituresParty;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresParty(String searchDbCampaignExpendituresParty) {
        this.searchDbCampaignExpendituresParty = searchDbCampaignExpendituresParty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.purpose")
    public String searchDbCampaignExpendituresPurpose;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresPurpose(String searchDbCampaignExpendituresPurpose) {
        this.searchDbCampaignExpendituresPurpose = searchDbCampaignExpendituresPurpose;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.recipient")
    public String searchDbCampaignExpendituresRecipient;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresRecipient(String searchDbCampaignExpendituresRecipient) {
        this.searchDbCampaignExpendituresRecipient = searchDbCampaignExpendituresRecipient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.state")
    public String searchDbCampaignExpendituresState;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresState(String searchDbCampaignExpendituresState) {
        this.searchDbCampaignExpendituresState = searchDbCampaignExpendituresState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.transaction_date")
    public String searchDbCampaignExpendituresTransactionDate;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresTransactionDate(String searchDbCampaignExpendituresTransactionDate) {
        this.searchDbCampaignExpendituresTransactionDate = searchDbCampaignExpendituresTransactionDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_campaign_expenditures.zip_code")
    public String searchDbCampaignExpendituresZipCode;
    public SearchCampaignExpendituresQueryParams withSearchDbCampaignExpendituresZipCode(String searchDbCampaignExpendituresZipCode) {
        this.searchDbCampaignExpendituresZipCode = searchDbCampaignExpendituresZipCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchCampaignExpendituresQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchCampaignExpendituresQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchCampaignExpendituresQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}