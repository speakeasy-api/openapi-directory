package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleBQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleBQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleBQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disbursement_description")
    public String[] disbursementDescription;
    public GetSchedulesScheduleBQueryParams withDisbursementDescription(String[] disbursementDescription) {
        this.disbursementDescription = disbursementDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disbursement_purpose_category")
    public String[] disbursementPurposeCategory;
    public GetSchedulesScheduleBQueryParams withDisbursementPurposeCategory(String[] disbursementPurposeCategory) {
        this.disbursementPurposeCategory = disbursementPurposeCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleBQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_disbursement_amount")
    public Float lastDisbursementAmount;
    public GetSchedulesScheduleBQueryParams withLastDisbursementAmount(Float lastDisbursementAmount) {
        this.lastDisbursementAmount = lastDisbursementAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_disbursement_date")
    public LocalDate lastDisbursementDate;
    public GetSchedulesScheduleBQueryParams withLastDisbursementDate(LocalDate lastDisbursementDate) {
        this.lastDisbursementDate = lastDisbursementDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_index")
    public Integer lastIndex;
    public GetSchedulesScheduleBQueryParams withLastIndex(Integer lastIndex) {
        this.lastIndex = lastIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleBQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleBQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_date")
    public LocalDate maxDate;
    public GetSchedulesScheduleBQueryParams withMaxDate(LocalDate maxDate) {
        this.maxDate = maxDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleBQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleBQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_date")
    public LocalDate minDate;
    public GetSchedulesScheduleBQueryParams withMinDate(LocalDate minDate) {
        this.minDate = minDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleBQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleBQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_city")
    public String[] recipientCity;
    public GetSchedulesScheduleBQueryParams withRecipientCity(String[] recipientCity) {
        this.recipientCity = recipientCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_id")
    public String[] recipientCommitteeId;
    public GetSchedulesScheduleBQueryParams withRecipientCommitteeId(String[] recipientCommitteeId) {
        this.recipientCommitteeId = recipientCommitteeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_name")
    public String[] recipientName;
    public GetSchedulesScheduleBQueryParams withRecipientName(String[] recipientName) {
        this.recipientName = recipientName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_state")
    public String[] recipientState;
    public GetSchedulesScheduleBQueryParams withRecipientState(String[] recipientState) {
        this.recipientState = recipientState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleBQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleBQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleBQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_committee_designation")
    public GetSchedulesScheduleBSpenderCommitteeDesignationEnum[] spenderCommitteeDesignation;
    public GetSchedulesScheduleBQueryParams withSpenderCommitteeDesignation(GetSchedulesScheduleBSpenderCommitteeDesignationEnum[] spenderCommitteeDesignation) {
        this.spenderCommitteeDesignation = spenderCommitteeDesignation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_committee_org_type")
    public GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum[] spenderCommitteeOrgType;
    public GetSchedulesScheduleBQueryParams withSpenderCommitteeOrgType(GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum[] spenderCommitteeOrgType) {
        this.spenderCommitteeOrgType = spenderCommitteeOrgType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_committee_type")
    public GetSchedulesScheduleBSpenderCommitteeTypeEnum[] spenderCommitteeType;
    public GetSchedulesScheduleBQueryParams withSpenderCommitteeType(GetSchedulesScheduleBSpenderCommitteeTypeEnum[] spenderCommitteeType) {
        this.spenderCommitteeType = spenderCommitteeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=two_year_transaction_period")
    public Integer[] twoYearTransactionPeriod;
    public GetSchedulesScheduleBQueryParams withTwoYearTransactionPeriod(Integer[] twoYearTransactionPeriod) {
        this.twoYearTransactionPeriod = twoYearTransactionPeriod;
        return this;
    }
}