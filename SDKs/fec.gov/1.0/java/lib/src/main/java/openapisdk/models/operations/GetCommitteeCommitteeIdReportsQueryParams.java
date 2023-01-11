package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommitteeCommitteeIdReportsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beginning_image_number")
    public String[] beginningImageNumber;
    public GetCommitteeCommitteeIdReportsQueryParams withBeginningImageNumber(String[] beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String candidateId;
    public GetCommitteeCommitteeIdReportsQueryParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommitteeCommitteeIdReportsQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_amended")
    public Boolean isAmended;
    public GetCommitteeCommitteeIdReportsQueryParams withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_cash_on_hand_end_period_amount")
    public String maxCashOnHandEndPeriodAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxCashOnHandEndPeriodAmount(String maxCashOnHandEndPeriodAmount) {
        this.maxCashOnHandEndPeriodAmount = maxCashOnHandEndPeriodAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_debts_owed_expenditures")
    public String maxDebtsOwedExpenditures;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxDebtsOwedExpenditures(String maxDebtsOwedExpenditures) {
        this.maxDebtsOwedExpenditures = maxDebtsOwedExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_disbursements_amount")
    public String maxDisbursementsAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxDisbursementsAmount(String maxDisbursementsAmount) {
        this.maxDisbursementsAmount = maxDisbursementsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_independent_expenditures")
    public String maxIndependentExpenditures;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxIndependentExpenditures(String maxIndependentExpenditures) {
        this.maxIndependentExpenditures = maxIndependentExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_party_coordinated_expenditures")
    public String maxPartyCoordinatedExpenditures;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxPartyCoordinatedExpenditures(String maxPartyCoordinatedExpenditures) {
        this.maxPartyCoordinatedExpenditures = maxPartyCoordinatedExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipts_amount")
    public String maxReceiptsAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxReceiptsAmount(String maxReceiptsAmount) {
        this.maxReceiptsAmount = maxReceiptsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_total_contributions")
    public String maxTotalContributions;
    public GetCommitteeCommitteeIdReportsQueryParams withMaxTotalContributions(String maxTotalContributions) {
        this.maxTotalContributions = maxTotalContributions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_cash_on_hand_end_period_amount")
    public String minCashOnHandEndPeriodAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMinCashOnHandEndPeriodAmount(String minCashOnHandEndPeriodAmount) {
        this.minCashOnHandEndPeriodAmount = minCashOnHandEndPeriodAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_debts_owed_amount")
    public String minDebtsOwedAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMinDebtsOwedAmount(String minDebtsOwedAmount) {
        this.minDebtsOwedAmount = minDebtsOwedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_disbursements_amount")
    public String minDisbursementsAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMinDisbursementsAmount(String minDisbursementsAmount) {
        this.minDisbursementsAmount = minDisbursementsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_independent_expenditures")
    public String minIndependentExpenditures;
    public GetCommitteeCommitteeIdReportsQueryParams withMinIndependentExpenditures(String minIndependentExpenditures) {
        this.minIndependentExpenditures = minIndependentExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_party_coordinated_expenditures")
    public String minPartyCoordinatedExpenditures;
    public GetCommitteeCommitteeIdReportsQueryParams withMinPartyCoordinatedExpenditures(String minPartyCoordinatedExpenditures) {
        this.minPartyCoordinatedExpenditures = minPartyCoordinatedExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipts_amount")
    public String minReceiptsAmount;
    public GetCommitteeCommitteeIdReportsQueryParams withMinReceiptsAmount(String minReceiptsAmount) {
        this.minReceiptsAmount = minReceiptsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_total_contributions")
    public String minTotalContributions;
    public GetCommitteeCommitteeIdReportsQueryParams withMinTotalContributions(String minTotalContributions) {
        this.minTotalContributions = minTotalContributions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommitteeCommitteeIdReportsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommitteeCommitteeIdReportsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_type")
    public String[] reportType;
    public GetCommitteeCommitteeIdReportsQueryParams withReportType(String[] reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetCommitteeCommitteeIdReportsQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommitteeCommitteeIdReportsQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommitteeCommitteeIdReportsQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommitteeCommitteeIdReportsQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String[] type;
    public GetCommitteeCommitteeIdReportsQueryParams withType(String[] type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Integer[] year;
    public GetCommitteeCommitteeIdReportsQueryParams withYear(Integer[] year) {
        this.year = year;
        return this;
    }
}