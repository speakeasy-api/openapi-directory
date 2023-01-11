package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleEEfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleEEfileQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetSchedulesScheduleEEfileQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_office")
    public GetSchedulesScheduleEEfileCandidateOfficeEnum candidateOffice;
    public GetSchedulesScheduleEEfileQueryParams withCandidateOffice(GetSchedulesScheduleEEfileCandidateOfficeEnum candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_office_district")
    public String[] candidateOfficeDistrict;
    public GetSchedulesScheduleEEfileQueryParams withCandidateOfficeDistrict(String[] candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_office_state")
    public String[] candidateOfficeState;
    public GetSchedulesScheduleEEfileQueryParams withCandidateOfficeState(String[] candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_party")
    public String[] candidateParty;
    public GetSchedulesScheduleEEfileQueryParams withCandidateParty(String[] candidateParty) {
        this.candidateParty = candidateParty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_search")
    public String[] candidateSearch;
    public GetSchedulesScheduleEEfileQueryParams withCandidateSearch(String[] candidateSearch) {
        this.candidateSearch = candidateSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleEEfileQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filing_form")
    public String[] filingForm;
    public GetSchedulesScheduleEEfileQueryParams withFilingForm(String[] filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleEEfileQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_notice")
    public Boolean isNotice;
    public GetSchedulesScheduleEEfileQueryParams withIsNotice(Boolean isNotice) {
        this.isNotice = isNotice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_dissemination_date")
    public LocalDate maxDisseminationDate;
    public GetSchedulesScheduleEEfileQueryParams withMaxDisseminationDate(LocalDate maxDisseminationDate) {
        this.maxDisseminationDate = maxDisseminationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_expenditure_amount")
    public Integer maxExpenditureAmount;
    public GetSchedulesScheduleEEfileQueryParams withMaxExpenditureAmount(Integer maxExpenditureAmount) {
        this.maxExpenditureAmount = maxExpenditureAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_expenditure_date")
    public LocalDate maxExpenditureDate;
    public GetSchedulesScheduleEEfileQueryParams withMaxExpenditureDate(LocalDate maxExpenditureDate) {
        this.maxExpenditureDate = maxExpenditureDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_filed_date")
    public LocalDate maxFiledDate;
    public GetSchedulesScheduleEEfileQueryParams withMaxFiledDate(LocalDate maxFiledDate) {
        this.maxFiledDate = maxFiledDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_dissemination_date")
    public LocalDate minDisseminationDate;
    public GetSchedulesScheduleEEfileQueryParams withMinDisseminationDate(LocalDate minDisseminationDate) {
        this.minDisseminationDate = minDisseminationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_expenditure_amount")
    public Integer minExpenditureAmount;
    public GetSchedulesScheduleEEfileQueryParams withMinExpenditureAmount(Integer minExpenditureAmount) {
        this.minExpenditureAmount = minExpenditureAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_expenditure_date")
    public LocalDate minExpenditureDate;
    public GetSchedulesScheduleEEfileQueryParams withMinExpenditureDate(LocalDate minExpenditureDate) {
        this.minExpenditureDate = minExpenditureDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_filed_date")
    public LocalDate minFiledDate;
    public GetSchedulesScheduleEEfileQueryParams withMinFiledDate(LocalDate minFiledDate) {
        this.minFiledDate = minFiledDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=most_recent")
    public Boolean mostRecent;
    public GetSchedulesScheduleEEfileQueryParams withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetSchedulesScheduleEEfileQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payee_name")
    public String[] payeeName;
    public GetSchedulesScheduleEEfileQueryParams withPayeeName(String[] payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleEEfileQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleEEfileQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleEEfileQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleEEfileQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetSchedulesScheduleEEfileQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spender_name")
    public String[] spenderName;
    public GetSchedulesScheduleEEfileQueryParams withSpenderName(String[] spenderName) {
        this.spenderName = spenderName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=support_oppose_indicator")
    public GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[] supportOpposeIndicator;
    public GetSchedulesScheduleEEfileQueryParams withSupportOpposeIndicator(GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[] supportOpposeIndicator) {
        this.supportOpposeIndicator = supportOpposeIndicator;
        return this;
    }
}