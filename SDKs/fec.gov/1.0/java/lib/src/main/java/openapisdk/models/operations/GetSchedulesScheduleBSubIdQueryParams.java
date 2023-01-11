package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleBSubIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleBSubIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleBSubIdQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disbursement_description")
    public String[] disbursementDescription;
    public GetSchedulesScheduleBSubIdQueryParams withDisbursementDescription(String[] disbursementDescription) {
        this.disbursementDescription = disbursementDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disbursement_purpose_category")
    public String[] disbursementPurposeCategory;
    public GetSchedulesScheduleBSubIdQueryParams withDisbursementPurposeCategory(String[] disbursementPurposeCategory) {
        this.disbursementPurposeCategory = disbursementPurposeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleBSubIdQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_disbursement_amount")
    public Float lastDisbursementAmount;
    public GetSchedulesScheduleBSubIdQueryParams withLastDisbursementAmount(Float lastDisbursementAmount) {
        this.lastDisbursementAmount = lastDisbursementAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_disbursement_date")
    public LocalDate lastDisbursementDate;
    public GetSchedulesScheduleBSubIdQueryParams withLastDisbursementDate(LocalDate lastDisbursementDate) {
        this.lastDisbursementDate = lastDisbursementDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_index")
    public Integer lastIndex;
    public GetSchedulesScheduleBSubIdQueryParams withLastIndex(Integer lastIndex) {
        this.lastIndex = lastIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleBSubIdQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleBSubIdQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_date")
    public LocalDate maxDate;
    public GetSchedulesScheduleBSubIdQueryParams withMaxDate(LocalDate maxDate) {
        this.maxDate = maxDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleBSubIdQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleBSubIdQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_date")
    public LocalDate minDate;
    public GetSchedulesScheduleBSubIdQueryParams withMinDate(LocalDate minDate) {
        this.minDate = minDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleBSubIdQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleBSubIdQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_city")
    public String[] recipientCity;
    public GetSchedulesScheduleBSubIdQueryParams withRecipientCity(String[] recipientCity) {
        this.recipientCity = recipientCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_id")
    public String[] recipientCommitteeId;
    public GetSchedulesScheduleBSubIdQueryParams withRecipientCommitteeId(String[] recipientCommitteeId) {
        this.recipientCommitteeId = recipientCommitteeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_name")
    public String[] recipientName;
    public GetSchedulesScheduleBSubIdQueryParams withRecipientName(String[] recipientName) {
        this.recipientName = recipientName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_state")
    public String[] recipientState;
    public GetSchedulesScheduleBSubIdQueryParams withRecipientState(String[] recipientState) {
        this.recipientState = recipientState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleBSubIdQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleBSubIdQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleBSubIdQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_committee_designation")
    public GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum[] spenderCommitteeDesignation;
    public GetSchedulesScheduleBSubIdQueryParams withSpenderCommitteeDesignation(GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum[] spenderCommitteeDesignation) {
        this.spenderCommitteeDesignation = spenderCommitteeDesignation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_committee_org_type")
    public GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum[] spenderCommitteeOrgType;
    public GetSchedulesScheduleBSubIdQueryParams withSpenderCommitteeOrgType(GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum[] spenderCommitteeOrgType) {
        this.spenderCommitteeOrgType = spenderCommitteeOrgType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_committee_type")
    public GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum[] spenderCommitteeType;
    public GetSchedulesScheduleBSubIdQueryParams withSpenderCommitteeType(GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum[] spenderCommitteeType) {
        this.spenderCommitteeType = spenderCommitteeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=two_year_transaction_period")
    public Integer[] twoYearTransactionPeriod;
    public GetSchedulesScheduleBSubIdQueryParams withTwoYearTransactionPeriod(Integer[] twoYearTransactionPeriod) {
        this.twoYearTransactionPeriod = twoYearTransactionPeriod;
        return this;
    }
}