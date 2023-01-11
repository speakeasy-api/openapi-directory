package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBoulderCampaignContributionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBoulderCampaignContributionsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBoulderCampaignContributionsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBoulderCampaignContributionsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBoulderCampaignContributionsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBoulderCampaignContributionsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBoulderCampaignContributionsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBoulderCampaignContributionsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBoulderCampaignContributionsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBoulderCampaignContributionsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBoulderCampaignContributionsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBoulderCampaignContributionsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBoulderCampaignContributionsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBoulderCampaignContributionsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBoulderCampaignContributionsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.amended_date")
    public String searchDbBoulderCampaignContributionsAmendedDate;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsAmendedDate(String searchDbBoulderCampaignContributionsAmendedDate) {
        this.searchDbBoulderCampaignContributionsAmendedDate = searchDbBoulderCampaignContributionsAmendedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.anonymous")
    public String searchDbBoulderCampaignContributionsAnonymous;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsAnonymous(String searchDbBoulderCampaignContributionsAnonymous) {
        this.searchDbBoulderCampaignContributionsAnonymous = searchDbBoulderCampaignContributionsAnonymous;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.candidate")
    public String searchDbBoulderCampaignContributionsCandidate;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsCandidate(String searchDbBoulderCampaignContributionsCandidate) {
        this.searchDbBoulderCampaignContributionsCandidate = searchDbBoulderCampaignContributionsCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.city")
    public String searchDbBoulderCampaignContributionsCity;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsCity(String searchDbBoulderCampaignContributionsCity) {
        this.searchDbBoulderCampaignContributionsCity = searchDbBoulderCampaignContributionsCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.committee")
    public String searchDbBoulderCampaignContributionsCommittee;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsCommittee(String searchDbBoulderCampaignContributionsCommittee) {
        this.searchDbBoulderCampaignContributionsCommittee = searchDbBoulderCampaignContributionsCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.committee_num")
    public String searchDbBoulderCampaignContributionsCommitteeNum;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsCommitteeNum(String searchDbBoulderCampaignContributionsCommitteeNum) {
        this.searchDbBoulderCampaignContributionsCommitteeNum = searchDbBoulderCampaignContributionsCommitteeNum;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.contribution")
    public Double searchDbBoulderCampaignContributionsContribution;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsContribution(Double searchDbBoulderCampaignContributionsContribution) {
        this.searchDbBoulderCampaignContributionsContribution = searchDbBoulderCampaignContributionsContribution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.contribution_type")
    public String searchDbBoulderCampaignContributionsContributionType;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsContributionType(String searchDbBoulderCampaignContributionsContributionType) {
        this.searchDbBoulderCampaignContributionsContributionType = searchDbBoulderCampaignContributionsContributionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.filing_date")
    public String searchDbBoulderCampaignContributionsFilingDate;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsFilingDate(String searchDbBoulderCampaignContributionsFilingDate) {
        this.searchDbBoulderCampaignContributionsFilingDate = searchDbBoulderCampaignContributionsFilingDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.first_name")
    public String searchDbBoulderCampaignContributionsFirstName;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsFirstName(String searchDbBoulderCampaignContributionsFirstName) {
        this.searchDbBoulderCampaignContributionsFirstName = searchDbBoulderCampaignContributionsFirstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.from_candidate")
    public String searchDbBoulderCampaignContributionsFromCandidate;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsFromCandidate(String searchDbBoulderCampaignContributionsFromCandidate) {
        this.searchDbBoulderCampaignContributionsFromCandidate = searchDbBoulderCampaignContributionsFromCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.last_name")
    public String searchDbBoulderCampaignContributionsLastName;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsLastName(String searchDbBoulderCampaignContributionsLastName) {
        this.searchDbBoulderCampaignContributionsLastName = searchDbBoulderCampaignContributionsLastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.match")
    public Double searchDbBoulderCampaignContributionsMatch;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsMatch(Double searchDbBoulderCampaignContributionsMatch) {
        this.searchDbBoulderCampaignContributionsMatch = searchDbBoulderCampaignContributionsMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.official_filing")
    public String searchDbBoulderCampaignContributionsOfficialFiling;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsOfficialFiling(String searchDbBoulderCampaignContributionsOfficialFiling) {
        this.searchDbBoulderCampaignContributionsOfficialFiling = searchDbBoulderCampaignContributionsOfficialFiling;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.state")
    public String searchDbBoulderCampaignContributionsState;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsState(String searchDbBoulderCampaignContributionsState) {
        this.searchDbBoulderCampaignContributionsState = searchDbBoulderCampaignContributionsState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.street")
    public String searchDbBoulderCampaignContributionsStreet;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsStreet(String searchDbBoulderCampaignContributionsStreet) {
        this.searchDbBoulderCampaignContributionsStreet = searchDbBoulderCampaignContributionsStreet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.transaction_date")
    public String searchDbBoulderCampaignContributionsTransactionDate;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsTransactionDate(String searchDbBoulderCampaignContributionsTransactionDate) {
        this.searchDbBoulderCampaignContributionsTransactionDate = searchDbBoulderCampaignContributionsTransactionDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.type")
    public String searchDbBoulderCampaignContributionsType;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsType(String searchDbBoulderCampaignContributionsType) {
        this.searchDbBoulderCampaignContributionsType = searchDbBoulderCampaignContributionsType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_campaign_contributions.zip")
    public String searchDbBoulderCampaignContributionsZip;
    public SearchBoulderCampaignContributionsQueryParams withSearchDbBoulderCampaignContributionsZip(String searchDbBoulderCampaignContributionsZip) {
        this.searchDbBoulderCampaignContributionsZip = searchDbBoulderCampaignContributionsZip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBoulderCampaignContributionsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBoulderCampaignContributionsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBoulderCampaignContributionsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}