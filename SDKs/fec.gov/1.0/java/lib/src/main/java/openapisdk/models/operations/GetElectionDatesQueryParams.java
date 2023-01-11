package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetElectionDatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetElectionDatesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_district")
    public String[] electionDistrict;
    public GetElectionDatesQueryParams withElectionDistrict(String[] electionDistrict) {
        this.electionDistrict = electionDistrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_party")
    public String[] electionParty;
    public GetElectionDatesQueryParams withElectionParty(String[] electionParty) {
        this.electionParty = electionParty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_state")
    public String[] electionState;
    public GetElectionDatesQueryParams withElectionState(String[] electionState) {
        this.electionState = electionState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_type_id")
    public String[] electionTypeId;
    public GetElectionDatesQueryParams withElectionTypeId(String[] electionTypeId) {
        this.electionTypeId = electionTypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=election_year")
    public String[] electionYear;
    public GetElectionDatesQueryParams withElectionYear(String[] electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_create_date")
    public LocalDate maxCreateDate;
    public GetElectionDatesQueryParams withMaxCreateDate(LocalDate maxCreateDate) {
        this.maxCreateDate = maxCreateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_election_date")
    public LocalDate maxElectionDate;
    public GetElectionDatesQueryParams withMaxElectionDate(LocalDate maxElectionDate) {
        this.maxElectionDate = maxElectionDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_primary_general_date")
    public LocalDate maxPrimaryGeneralDate;
    public GetElectionDatesQueryParams withMaxPrimaryGeneralDate(LocalDate maxPrimaryGeneralDate) {
        this.maxPrimaryGeneralDate = maxPrimaryGeneralDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_update_date")
    public LocalDate maxUpdateDate;
    public GetElectionDatesQueryParams withMaxUpdateDate(LocalDate maxUpdateDate) {
        this.maxUpdateDate = maxUpdateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_create_date")
    public LocalDate minCreateDate;
    public GetElectionDatesQueryParams withMinCreateDate(LocalDate minCreateDate) {
        this.minCreateDate = minCreateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_election_date")
    public LocalDate minElectionDate;
    public GetElectionDatesQueryParams withMinElectionDate(LocalDate minElectionDate) {
        this.minElectionDate = minElectionDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_primary_general_date")
    public LocalDate minPrimaryGeneralDate;
    public GetElectionDatesQueryParams withMinPrimaryGeneralDate(LocalDate minPrimaryGeneralDate) {
        this.minPrimaryGeneralDate = minPrimaryGeneralDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_update_date")
    public LocalDate minUpdateDate;
    public GetElectionDatesQueryParams withMinUpdateDate(LocalDate minUpdateDate) {
        this.minUpdateDate = minUpdateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office_sought")
    public GetElectionDatesOfficeSoughtEnum[] officeSought;
    public GetElectionDatesQueryParams withOfficeSought(GetElectionDatesOfficeSoughtEnum[] officeSought) {
        this.officeSought = officeSought;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetElectionDatesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetElectionDatesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetElectionDatesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetElectionDatesQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetElectionDatesQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetElectionDatesQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}