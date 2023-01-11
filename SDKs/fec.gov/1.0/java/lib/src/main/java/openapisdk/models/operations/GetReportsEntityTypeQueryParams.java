package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsEntityTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amendment_indicator")
    public GetReportsEntityTypeAmendmentIndicatorEnum[] amendmentIndicator;
    public GetReportsEntityTypeQueryParams withAmendmentIndicator(GetReportsEntityTypeAmendmentIndicatorEnum[] amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetReportsEntityTypeQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beginning_image_number")
    public String[] beginningImageNumber;
    public GetReportsEntityTypeQueryParams withBeginningImageNumber(String[] beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String candidateId;
    public GetReportsEntityTypeQueryParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetReportsEntityTypeQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetReportsEntityTypeQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filer_type")
    public GetReportsEntityTypeFilerTypeEnum filerType;
    public GetReportsEntityTypeQueryParams withFilerType(GetReportsEntityTypeFilerTypeEnum filerType) {
        this.filerType = filerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_amended")
    public Boolean isAmended;
    public GetReportsEntityTypeQueryParams withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_cash_on_hand_end_period_amount")
    public String maxCashOnHandEndPeriodAmount;
    public GetReportsEntityTypeQueryParams withMaxCashOnHandEndPeriodAmount(String maxCashOnHandEndPeriodAmount) {
        this.maxCashOnHandEndPeriodAmount = maxCashOnHandEndPeriodAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_debts_owed_expenditures")
    public String maxDebtsOwedExpenditures;
    public GetReportsEntityTypeQueryParams withMaxDebtsOwedExpenditures(String maxDebtsOwedExpenditures) {
        this.maxDebtsOwedExpenditures = maxDebtsOwedExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_disbursements_amount")
    public String maxDisbursementsAmount;
    public GetReportsEntityTypeQueryParams withMaxDisbursementsAmount(String maxDisbursementsAmount) {
        this.maxDisbursementsAmount = maxDisbursementsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_independent_expenditures")
    public String maxIndependentExpenditures;
    public GetReportsEntityTypeQueryParams withMaxIndependentExpenditures(String maxIndependentExpenditures) {
        this.maxIndependentExpenditures = maxIndependentExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_party_coordinated_expenditures")
    public String maxPartyCoordinatedExpenditures;
    public GetReportsEntityTypeQueryParams withMaxPartyCoordinatedExpenditures(String maxPartyCoordinatedExpenditures) {
        this.maxPartyCoordinatedExpenditures = maxPartyCoordinatedExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipt_date")
    public LocalDate maxReceiptDate;
    public GetReportsEntityTypeQueryParams withMaxReceiptDate(LocalDate maxReceiptDate) {
        this.maxReceiptDate = maxReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipts_amount")
    public String maxReceiptsAmount;
    public GetReportsEntityTypeQueryParams withMaxReceiptsAmount(String maxReceiptsAmount) {
        this.maxReceiptsAmount = maxReceiptsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_total_contributions")
    public String maxTotalContributions;
    public GetReportsEntityTypeQueryParams withMaxTotalContributions(String maxTotalContributions) {
        this.maxTotalContributions = maxTotalContributions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_cash_on_hand_end_period_amount")
    public String minCashOnHandEndPeriodAmount;
    public GetReportsEntityTypeQueryParams withMinCashOnHandEndPeriodAmount(String minCashOnHandEndPeriodAmount) {
        this.minCashOnHandEndPeriodAmount = minCashOnHandEndPeriodAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_debts_owed_amount")
    public String minDebtsOwedAmount;
    public GetReportsEntityTypeQueryParams withMinDebtsOwedAmount(String minDebtsOwedAmount) {
        this.minDebtsOwedAmount = minDebtsOwedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_disbursements_amount")
    public String minDisbursementsAmount;
    public GetReportsEntityTypeQueryParams withMinDisbursementsAmount(String minDisbursementsAmount) {
        this.minDisbursementsAmount = minDisbursementsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_independent_expenditures")
    public String minIndependentExpenditures;
    public GetReportsEntityTypeQueryParams withMinIndependentExpenditures(String minIndependentExpenditures) {
        this.minIndependentExpenditures = minIndependentExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_party_coordinated_expenditures")
    public String minPartyCoordinatedExpenditures;
    public GetReportsEntityTypeQueryParams withMinPartyCoordinatedExpenditures(String minPartyCoordinatedExpenditures) {
        this.minPartyCoordinatedExpenditures = minPartyCoordinatedExpenditures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipt_date")
    public LocalDate minReceiptDate;
    public GetReportsEntityTypeQueryParams withMinReceiptDate(LocalDate minReceiptDate) {
        this.minReceiptDate = minReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipts_amount")
    public String minReceiptsAmount;
    public GetReportsEntityTypeQueryParams withMinReceiptsAmount(String minReceiptsAmount) {
        this.minReceiptsAmount = minReceiptsAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_total_contributions")
    public String minTotalContributions;
    public GetReportsEntityTypeQueryParams withMinTotalContributions(String minTotalContributions) {
        this.minTotalContributions = minTotalContributions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=most_recent")
    public Boolean mostRecent;
    public GetReportsEntityTypeQueryParams withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetReportsEntityTypeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetReportsEntityTypeQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_type")
    public String[] reportType;
    public GetReportsEntityTypeQueryParams withReportType(String[] reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetReportsEntityTypeQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetReportsEntityTypeQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetReportsEntityTypeQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetReportsEntityTypeQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String[] type;
    public GetReportsEntityTypeQueryParams withType(String[] type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Integer[] year;
    public GetReportsEntityTypeQueryParams withYear(Integer[] year) {
        this.year = year;
        return this;
    }
}