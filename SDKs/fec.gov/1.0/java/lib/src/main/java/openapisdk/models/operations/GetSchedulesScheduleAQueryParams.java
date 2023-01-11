package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleAQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleAQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleAQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_city")
    public String[] contributorCity;
    public GetSchedulesScheduleAQueryParams withContributorCity(String[] contributorCity) {
        this.contributorCity = contributorCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_employer")
    public String[] contributorEmployer;
    public GetSchedulesScheduleAQueryParams withContributorEmployer(String[] contributorEmployer) {
        this.contributorEmployer = contributorEmployer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_id")
    public String[] contributorId;
    public GetSchedulesScheduleAQueryParams withContributorId(String[] contributorId) {
        this.contributorId = contributorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_name")
    public String[] contributorName;
    public GetSchedulesScheduleAQueryParams withContributorName(String[] contributorName) {
        this.contributorName = contributorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_occupation")
    public String[] contributorOccupation;
    public GetSchedulesScheduleAQueryParams withContributorOccupation(String[] contributorOccupation) {
        this.contributorOccupation = contributorOccupation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_state")
    public String[] contributorState;
    public GetSchedulesScheduleAQueryParams withContributorState(String[] contributorState) {
        this.contributorState = contributorState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_type")
    public GetSchedulesScheduleAContributorTypeEnum[] contributorType;
    public GetSchedulesScheduleAQueryParams withContributorType(GetSchedulesScheduleAContributorTypeEnum[] contributorType) {
        this.contributorType = contributorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_zip")
    public String[] contributorZip;
    public GetSchedulesScheduleAQueryParams withContributorZip(String[] contributorZip) {
        this.contributorZip = contributorZip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleAQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_individual")
    public Boolean isIndividual;
    public GetSchedulesScheduleAQueryParams withIsIndividual(Boolean isIndividual) {
        this.isIndividual = isIndividual;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_contribution_receipt_amount")
    public Float lastContributionReceiptAmount;
    public GetSchedulesScheduleAQueryParams withLastContributionReceiptAmount(Float lastContributionReceiptAmount) {
        this.lastContributionReceiptAmount = lastContributionReceiptAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_contribution_receipt_date")
    public LocalDate lastContributionReceiptDate;
    public GetSchedulesScheduleAQueryParams withLastContributionReceiptDate(LocalDate lastContributionReceiptDate) {
        this.lastContributionReceiptDate = lastContributionReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_index")
    public Integer lastIndex;
    public GetSchedulesScheduleAQueryParams withLastIndex(Integer lastIndex) {
        this.lastIndex = lastIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleAQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleAQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_date")
    public LocalDate maxDate;
    public GetSchedulesScheduleAQueryParams withMaxDate(LocalDate maxDate) {
        this.maxDate = maxDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleAQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_load_date")
    public LocalDate maxLoadDate;
    public GetSchedulesScheduleAQueryParams withMaxLoadDate(LocalDate maxLoadDate) {
        this.maxLoadDate = maxLoadDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleAQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_date")
    public LocalDate minDate;
    public GetSchedulesScheduleAQueryParams withMinDate(LocalDate minDate) {
        this.minDate = minDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleAQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_load_date")
    public LocalDate minLoadDate;
    public GetSchedulesScheduleAQueryParams withMinLoadDate(LocalDate minLoadDate) {
        this.minLoadDate = minLoadDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleAQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_designation")
    public GetSchedulesScheduleARecipientCommitteeDesignationEnum[] recipientCommitteeDesignation;
    public GetSchedulesScheduleAQueryParams withRecipientCommitteeDesignation(GetSchedulesScheduleARecipientCommitteeDesignationEnum[] recipientCommitteeDesignation) {
        this.recipientCommitteeDesignation = recipientCommitteeDesignation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_org_type")
    public GetSchedulesScheduleARecipientCommitteeOrgTypeEnum[] recipientCommitteeOrgType;
    public GetSchedulesScheduleAQueryParams withRecipientCommitteeOrgType(GetSchedulesScheduleARecipientCommitteeOrgTypeEnum[] recipientCommitteeOrgType) {
        this.recipientCommitteeOrgType = recipientCommitteeOrgType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recipient_committee_type")
    public GetSchedulesScheduleARecipientCommitteeTypeEnum[] recipientCommitteeType;
    public GetSchedulesScheduleAQueryParams withRecipientCommitteeType(GetSchedulesScheduleARecipientCommitteeTypeEnum[] recipientCommitteeType) {
        this.recipientCommitteeType = recipientCommitteeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleAQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleAQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleAQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=two_year_transaction_period")
    public Integer[] twoYearTransactionPeriod;
    public GetSchedulesScheduleAQueryParams withTwoYearTransactionPeriod(Integer[] twoYearTransactionPeriod) {
        this.twoYearTransactionPeriod = twoYearTransactionPeriod;
        return this;
    }
}