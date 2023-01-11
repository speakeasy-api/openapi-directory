package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleCQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleCQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_name")
    public String[] candidateName;
    public GetSchedulesScheduleCQueryParams withCandidateName(String[] candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleCQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleCQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_index")
    public Integer lastIndex;
    public GetSchedulesScheduleCQueryParams withLastIndex(Integer lastIndex) {
        this.lastIndex = lastIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleCQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=loan_source_name")
    public String[] loanSourceName;
    public GetSchedulesScheduleCQueryParams withLoanSourceName(String[] loanSourceName) {
        this.loanSourceName = loanSourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleCQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleCQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_incurred_date")
    public LocalDate maxIncurredDate;
    public GetSchedulesScheduleCQueryParams withMaxIncurredDate(LocalDate maxIncurredDate) {
        this.maxIncurredDate = maxIncurredDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_payment_to_date")
    public Integer maxPaymentToDate;
    public GetSchedulesScheduleCQueryParams withMaxPaymentToDate(Integer maxPaymentToDate) {
        this.maxPaymentToDate = maxPaymentToDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleCQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleCQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_incurred_date")
    public LocalDate minIncurredDate;
    public GetSchedulesScheduleCQueryParams withMinIncurredDate(LocalDate minIncurredDate) {
        this.minIncurredDate = minIncurredDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_payment_to_date")
    public Integer minPaymentToDate;
    public GetSchedulesScheduleCQueryParams withMinPaymentToDate(Integer minPaymentToDate) {
        this.minPaymentToDate = minPaymentToDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetSchedulesScheduleCQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleCQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleCQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleCQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleCQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetSchedulesScheduleCQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}