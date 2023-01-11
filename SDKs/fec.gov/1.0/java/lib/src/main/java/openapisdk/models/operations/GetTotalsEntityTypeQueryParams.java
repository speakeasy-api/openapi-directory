package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTotalsEntityTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetTotalsEntityTypeQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_designation")
    public String[] committeeDesignation;
    public GetTotalsEntityTypeQueryParams withCommitteeDesignation(String[] committeeDesignation) {
        this.committeeDesignation = committeeDesignation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String committeeId;
    public GetTotalsEntityTypeQueryParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_state")
    public String[] committeeState;
    public GetTotalsEntityTypeQueryParams withCommitteeState(String[] committeeState) {
        this.committeeState = committeeState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public String[] committeeType;
    public GetTotalsEntityTypeQueryParams withCommitteeType(String[] committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetTotalsEntityTypeQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filing_frequency")
    public GetTotalsEntityTypeFilingFrequencyEnum[] filingFrequency;
    public GetTotalsEntityTypeQueryParams withFilingFrequency(GetTotalsEntityTypeFilingFrequencyEnum[] filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_disbursements")
    public String maxDisbursements;
    public GetTotalsEntityTypeQueryParams withMaxDisbursements(String maxDisbursements) {
        this.maxDisbursements = maxDisbursements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_last_cash_on_hand_end_period")
    public String maxLastCashOnHandEndPeriod;
    public GetTotalsEntityTypeQueryParams withMaxLastCashOnHandEndPeriod(String maxLastCashOnHandEndPeriod) {
        this.maxLastCashOnHandEndPeriod = maxLastCashOnHandEndPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_last_debts_owed_by_committee")
    public String maxLastDebtsOwedByCommittee;
    public GetTotalsEntityTypeQueryParams withMaxLastDebtsOwedByCommittee(String maxLastDebtsOwedByCommittee) {
        this.maxLastDebtsOwedByCommittee = maxLastDebtsOwedByCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipts")
    public String maxReceipts;
    public GetTotalsEntityTypeQueryParams withMaxReceipts(String maxReceipts) {
        this.maxReceipts = maxReceipts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_disbursements")
    public String minDisbursements;
    public GetTotalsEntityTypeQueryParams withMinDisbursements(String minDisbursements) {
        this.minDisbursements = minDisbursements;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_last_cash_on_hand_end_period")
    public String minLastCashOnHandEndPeriod;
    public GetTotalsEntityTypeQueryParams withMinLastCashOnHandEndPeriod(String minLastCashOnHandEndPeriod) {
        this.minLastCashOnHandEndPeriod = minLastCashOnHandEndPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_last_debts_owed_by_committee")
    public String minLastDebtsOwedByCommittee;
    public GetTotalsEntityTypeQueryParams withMinLastDebtsOwedByCommittee(String minLastDebtsOwedByCommittee) {
        this.minLastDebtsOwedByCommittee = minLastDebtsOwedByCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipts")
    public String minReceipts;
    public GetTotalsEntityTypeQueryParams withMinReceipts(String minReceipts) {
        this.minReceipts = minReceipts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organization_type")
    public GetTotalsEntityTypeOrganizationTypeEnum[] organizationType;
    public GetTotalsEntityTypeQueryParams withOrganizationType(GetTotalsEntityTypeOrganizationTypeEnum[] organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetTotalsEntityTypeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetTotalsEntityTypeQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetTotalsEntityTypeQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetTotalsEntityTypeQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetTotalsEntityTypeQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetTotalsEntityTypeQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sponsor_candidate_id")
    public String[] sponsorCandidateId;
    public GetTotalsEntityTypeQueryParams withSponsorCandidateId(String[] sponsorCandidateId) {
        this.sponsorCandidateId = sponsorCandidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=treasurer_name")
    public String[] treasurerName;
    public GetTotalsEntityTypeQueryParams withTreasurerName(String[] treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
}