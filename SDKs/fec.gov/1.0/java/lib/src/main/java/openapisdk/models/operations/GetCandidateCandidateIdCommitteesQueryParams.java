package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdCommitteesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCandidateCandidateIdCommitteesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public GetCandidateCandidateIdCommitteesCommitteeTypeEnum[] committeeType;
    public GetCandidateCandidateIdCommitteesQueryParams withCommitteeType(GetCandidateCandidateIdCommitteesCommitteeTypeEnum[] committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCandidateCandidateIdCommitteesQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=designation")
    public GetCandidateCandidateIdCommitteesDesignationEnum[] designation;
    public GetCandidateCandidateIdCommitteesQueryParams withDesignation(GetCandidateCandidateIdCommitteesDesignationEnum[] designation) {
        this.designation = designation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filing_frequency")
    public GetCandidateCandidateIdCommitteesFilingFrequencyEnum[] filingFrequency;
    public GetCandidateCandidateIdCommitteesQueryParams withFilingFrequency(GetCandidateCandidateIdCommitteesFilingFrequencyEnum[] filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization_type")
    public GetCandidateCandidateIdCommitteesOrganizationTypeEnum[] organizationType;
    public GetCandidateCandidateIdCommitteesQueryParams withOrganizationType(GetCandidateCandidateIdCommitteesOrganizationTypeEnum[] organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCandidateCandidateIdCommitteesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCandidateCandidateIdCommitteesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCandidateCandidateIdCommitteesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCandidateCandidateIdCommitteesQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCandidateCandidateIdCommitteesQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCandidateCandidateIdCommitteesQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Integer[] year;
    public GetCandidateCandidateIdCommitteesQueryParams withYear(Integer[] year) {
        this.year = year;
        return this;
    }
}