package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetOperationsLogQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amendment_indicator")
    public String[] amendmentIndicator;
    public GetOperationsLogQueryParams withAmendmentIndicator(String[] amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetOperationsLogQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beginning_image_number")
    public String[] beginningImageNumber;
    public GetOperationsLogQueryParams withBeginningImageNumber(String[] beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_committee_id")
    public String[] candidateCommitteeId;
    public GetOperationsLogQueryParams withCandidateCommitteeId(String[] candidateCommitteeId) {
        this.candidateCommitteeId = candidateCommitteeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=form_type")
    public String[] formType;
    public GetOperationsLogQueryParams withFormType(String[] formType) {
        this.formType = formType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_coverage_end_date")
    public LocalDate maxCoverageEndDate;
    public GetOperationsLogQueryParams withMaxCoverageEndDate(LocalDate maxCoverageEndDate) {
        this.maxCoverageEndDate = maxCoverageEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipt_date")
    public LocalDate maxReceiptDate;
    public GetOperationsLogQueryParams withMaxReceiptDate(LocalDate maxReceiptDate) {
        this.maxReceiptDate = maxReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_transaction_data_complete_date")
    public LocalDate maxTransactionDataCompleteDate;
    public GetOperationsLogQueryParams withMaxTransactionDataCompleteDate(LocalDate maxTransactionDataCompleteDate) {
        this.maxTransactionDataCompleteDate = maxTransactionDataCompleteDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_coverage_end_date")
    public LocalDate minCoverageEndDate;
    public GetOperationsLogQueryParams withMinCoverageEndDate(LocalDate minCoverageEndDate) {
        this.minCoverageEndDate = minCoverageEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipt_date")
    public LocalDate minReceiptDate;
    public GetOperationsLogQueryParams withMinReceiptDate(LocalDate minReceiptDate) {
        this.minReceiptDate = minReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_transaction_data_complete_date")
    public LocalDate minTransactionDataCompleteDate;
    public GetOperationsLogQueryParams withMinTransactionDataCompleteDate(LocalDate minTransactionDataCompleteDate) {
        this.minTransactionDataCompleteDate = minTransactionDataCompleteDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetOperationsLogQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetOperationsLogQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_type")
    public String[] reportType;
    public GetOperationsLogQueryParams withReportType(String[] reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_year")
    public Integer[] reportYear;
    public GetOperationsLogQueryParams withReportYear(Integer[] reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetOperationsLogQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetOperationsLogQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetOperationsLogQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetOperationsLogQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status_num")
    public GetOperationsLogStatusNumEnum[] statusNum;
    public GetOperationsLogQueryParams withStatusNum(GetOperationsLogStatusNumEnum[] statusNum) {
        this.statusNum = statusNum;
        return this;
    }
}