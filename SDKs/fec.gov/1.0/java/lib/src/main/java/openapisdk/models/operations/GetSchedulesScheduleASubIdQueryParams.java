package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleASubIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleASubIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleASubIdQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_city")
    public String[] contributorCity;
    public GetSchedulesScheduleASubIdQueryParams withContributorCity(String[] contributorCity) {
        this.contributorCity = contributorCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_employer")
    public String[] contributorEmployer;
    public GetSchedulesScheduleASubIdQueryParams withContributorEmployer(String[] contributorEmployer) {
        this.contributorEmployer = contributorEmployer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_id")
    public String[] contributorId;
    public GetSchedulesScheduleASubIdQueryParams withContributorId(String[] contributorId) {
        this.contributorId = contributorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_name")
    public String[] contributorName;
    public GetSchedulesScheduleASubIdQueryParams withContributorName(String[] contributorName) {
        this.contributorName = contributorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_occupation")
    public String[] contributorOccupation;
    public GetSchedulesScheduleASubIdQueryParams withContributorOccupation(String[] contributorOccupation) {
        this.contributorOccupation = contributorOccupation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_state")
    public String[] contributorState;
    public GetSchedulesScheduleASubIdQueryParams withContributorState(String[] contributorState) {
        this.contributorState = contributorState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_type")
    public GetSchedulesScheduleASubIdContributorTypeEnum[] contributorType;
    public GetSchedulesScheduleASubIdQueryParams withContributorType(GetSchedulesScheduleASubIdContributorTypeEnum[] contributorType) {
        this.contributorType = contributorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_zip")
    public String[] contributorZip;
    public GetSchedulesScheduleASubIdQueryParams withContributorZip(String[] contributorZip) {
        this.contributorZip = contributorZip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleASubIdQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_individual")
    public Boolean isIndividual;
    public GetSchedulesScheduleASubIdQueryParams withIsIndividual(Boolean isIndividual) {
        this.isIndividual = isIndividual;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_contribution_receipt_amount")
    public Float lastContributionReceiptAmount;
    public GetSchedulesScheduleASubIdQueryParams withLastContributionReceiptAmount(Float lastContributionReceiptAmount) {
        this.lastContributionReceiptAmount = lastContributionReceiptAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_contribution_receipt_date")
    public LocalDate lastContributionReceiptDate;
    public GetSchedulesScheduleASubIdQueryParams withLastContributionReceiptDate(LocalDate lastContributionReceiptDate) {
        this.lastContributionReceiptDate = lastContributionReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_index")
    public Integer lastIndex;
    public GetSchedulesScheduleASubIdQueryParams withLastIndex(Integer lastIndex) {
        this.lastIndex = lastIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleASubIdQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleASubIdQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_date")
    public LocalDate maxDate;
    public GetSchedulesScheduleASubIdQueryParams withMaxDate(LocalDate maxDate) {
        this.maxDate = maxDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleASubIdQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_load_date")
    public LocalDate maxLoadDate;
    public GetSchedulesScheduleASubIdQueryParams withMaxLoadDate(LocalDate maxLoadDate) {
        this.maxLoadDate = maxLoadDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleASubIdQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_date")
    public LocalDate minDate;
    public GetSchedulesScheduleASubIdQueryParams withMinDate(LocalDate minDate) {
        this.minDate = minDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleASubIdQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_load_date")
    public LocalDate minLoadDate;
    public GetSchedulesScheduleASubIdQueryParams withMinLoadDate(LocalDate minLoadDate) {
        this.minLoadDate = minLoadDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleASubIdQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_designation")
    public GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum[] recipientCommitteeDesignation;
    public GetSchedulesScheduleASubIdQueryParams withRecipientCommitteeDesignation(GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum[] recipientCommitteeDesignation) {
        this.recipientCommitteeDesignation = recipientCommitteeDesignation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_org_type")
    public GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum[] recipientCommitteeOrgType;
    public GetSchedulesScheduleASubIdQueryParams withRecipientCommitteeOrgType(GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum[] recipientCommitteeOrgType) {
        this.recipientCommitteeOrgType = recipientCommitteeOrgType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_type")
    public GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum[] recipientCommitteeType;
    public GetSchedulesScheduleASubIdQueryParams withRecipientCommitteeType(GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum[] recipientCommitteeType) {
        this.recipientCommitteeType = recipientCommitteeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleASubIdQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleASubIdQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleASubIdQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=two_year_transaction_period")
    public Integer[] twoYearTransactionPeriod;
    public GetSchedulesScheduleASubIdQueryParams withTwoYearTransactionPeriod(Integer[] twoYearTransactionPeriod) {
        this.twoYearTransactionPeriod = twoYearTransactionPeriod;
        return this;
    }
}