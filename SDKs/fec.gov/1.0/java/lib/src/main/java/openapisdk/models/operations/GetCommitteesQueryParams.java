package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommitteesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetCommitteesQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetCommitteesQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public GetCommitteesCommitteeTypeEnum[] committeeType;
    public GetCommitteesQueryParams withCommitteeType(GetCommitteesCommitteeTypeEnum[] committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommitteesQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=designation")
    public GetCommitteesDesignationEnum[] designation;
    public GetCommitteesQueryParams withDesignation(GetCommitteesDesignationEnum[] designation) {
        this.designation = designation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filing_frequency")
    public GetCommitteesFilingFrequencyEnum[] filingFrequency;
    public GetCommitteesQueryParams withFilingFrequency(GetCommitteesFilingFrequencyEnum[] filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_first_file_date")
    public LocalDate maxFirstFileDate;
    public GetCommitteesQueryParams withMaxFirstFileDate(LocalDate maxFirstFileDate) {
        this.maxFirstFileDate = maxFirstFileDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_last_f1_date")
    public LocalDate maxLastF1Date;
    public GetCommitteesQueryParams withMaxLastF1Date(LocalDate maxLastF1Date) {
        this.maxLastF1Date = maxLastF1Date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_first_file_date")
    public LocalDate minFirstFileDate;
    public GetCommitteesQueryParams withMinFirstFileDate(LocalDate minFirstFileDate) {
        this.minFirstFileDate = minFirstFileDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_last_f1_date")
    public LocalDate minLastF1Date;
    public GetCommitteesQueryParams withMinLastF1Date(LocalDate minLastF1Date) {
        this.minLastF1Date = minLastF1Date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization_type")
    public GetCommitteesOrganizationTypeEnum[] organizationType;
    public GetCommitteesQueryParams withOrganizationType(GetCommitteesOrganizationTypeEnum[] organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommitteesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetCommitteesQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommitteesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetCommitteesQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCommitteesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommitteesQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommitteesQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommitteesQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sponsor_candidate_id")
    public String[] sponsorCandidateId;
    public GetCommitteesQueryParams withSponsorCandidateId(String[] sponsorCandidateId) {
        this.sponsorCandidateId = sponsorCandidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetCommitteesQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=treasurer_name")
    public String[] treasurerName;
    public GetCommitteesQueryParams withTreasurerName(String[] treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Integer[] year;
    public GetCommitteesQueryParams withYear(Integer[] year) {
        this.year = year;
        return this;
    }
}