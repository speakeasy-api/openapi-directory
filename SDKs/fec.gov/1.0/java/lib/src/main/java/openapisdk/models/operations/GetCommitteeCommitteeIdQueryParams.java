package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommitteeCommitteeIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public GetCommitteeCommitteeIdCommitteeTypeEnum[] committeeType;
    public GetCommitteeCommitteeIdQueryParams withCommitteeType(GetCommitteeCommitteeIdCommitteeTypeEnum[] committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommitteeCommitteeIdQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=designation")
    public GetCommitteeCommitteeIdDesignationEnum[] designation;
    public GetCommitteeCommitteeIdQueryParams withDesignation(GetCommitteeCommitteeIdDesignationEnum[] designation) {
        this.designation = designation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filing_frequency")
    public GetCommitteeCommitteeIdFilingFrequencyEnum[] filingFrequency;
    public GetCommitteeCommitteeIdQueryParams withFilingFrequency(GetCommitteeCommitteeIdFilingFrequencyEnum[] filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization_type")
    public GetCommitteeCommitteeIdOrganizationTypeEnum[] organizationType;
    public GetCommitteeCommitteeIdQueryParams withOrganizationType(GetCommitteeCommitteeIdOrganizationTypeEnum[] organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommitteeCommitteeIdQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommitteeCommitteeIdQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCommitteeCommitteeIdQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommitteeCommitteeIdQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommitteeCommitteeIdQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommitteeCommitteeIdQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Integer[] year;
    public GetCommitteeCommitteeIdQueryParams withYear(Integer[] year) {
        this.year = year;
        return this;
    }
}