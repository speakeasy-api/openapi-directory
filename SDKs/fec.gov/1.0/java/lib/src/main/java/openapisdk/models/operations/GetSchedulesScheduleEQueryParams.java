package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleEQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleEQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetSchedulesScheduleEQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_office")
    public GetSchedulesScheduleECandidateOfficeEnum[] candidateOffice;
    public GetSchedulesScheduleEQueryParams withCandidateOffice(GetSchedulesScheduleECandidateOfficeEnum[] candidateOffice) {
        this.candidateOffice = candidateOffice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_office_district")
    public String[] candidateOfficeDistrict;
    public GetSchedulesScheduleEQueryParams withCandidateOfficeDistrict(String[] candidateOfficeDistrict) {
        this.candidateOfficeDistrict = candidateOfficeDistrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_office_state")
    public String[] candidateOfficeState;
    public GetSchedulesScheduleEQueryParams withCandidateOfficeState(String[] candidateOfficeState) {
        this.candidateOfficeState = candidateOfficeState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_party")
    public String[] candidateParty;
    public GetSchedulesScheduleEQueryParams withCandidateParty(String[] candidateParty) {
        this.candidateParty = candidateParty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleEQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetSchedulesScheduleEQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filing_form")
    public String[] filingForm;
    public GetSchedulesScheduleEQueryParams withFilingForm(String[] filingForm) {
        this.filingForm = filingForm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleEQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_notice")
    public Boolean[] isNotice;
    public GetSchedulesScheduleEQueryParams withIsNotice(Boolean[] isNotice) {
        this.isNotice = isNotice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_expenditure_amount")
    public Float lastExpenditureAmount;
    public GetSchedulesScheduleEQueryParams withLastExpenditureAmount(Float lastExpenditureAmount) {
        this.lastExpenditureAmount = lastExpenditureAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_expenditure_date")
    public LocalDate lastExpenditureDate;
    public GetSchedulesScheduleEQueryParams withLastExpenditureDate(LocalDate lastExpenditureDate) {
        this.lastExpenditureDate = lastExpenditureDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_index")
    public Integer lastIndex;
    public GetSchedulesScheduleEQueryParams withLastIndex(Integer lastIndex) {
        this.lastIndex = lastIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_office_total_ytd")
    public Float lastOfficeTotalYtd;
    public GetSchedulesScheduleEQueryParams withLastOfficeTotalYtd(Float lastOfficeTotalYtd) {
        this.lastOfficeTotalYtd = lastOfficeTotalYtd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_support_oppose_indicator")
    public String lastSupportOpposeIndicator;
    public GetSchedulesScheduleEQueryParams withLastSupportOpposeIndicator(String lastSupportOpposeIndicator) {
        this.lastSupportOpposeIndicator = lastSupportOpposeIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleEQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleEQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_date")
    public LocalDate maxDate;
    public GetSchedulesScheduleEQueryParams withMaxDate(LocalDate maxDate) {
        this.maxDate = maxDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_dissemination_date")
    public LocalDate maxDisseminationDate;
    public GetSchedulesScheduleEQueryParams withMaxDisseminationDate(LocalDate maxDisseminationDate) {
        this.maxDisseminationDate = maxDisseminationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_filing_date")
    public LocalDate maxFilingDate;
    public GetSchedulesScheduleEQueryParams withMaxFilingDate(LocalDate maxFilingDate) {
        this.maxFilingDate = maxFilingDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleEQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleEQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_date")
    public LocalDate minDate;
    public GetSchedulesScheduleEQueryParams withMinDate(LocalDate minDate) {
        this.minDate = minDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_dissemination_date")
    public LocalDate minDisseminationDate;
    public GetSchedulesScheduleEQueryParams withMinDisseminationDate(LocalDate minDisseminationDate) {
        this.minDisseminationDate = minDisseminationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_filing_date")
    public LocalDate minFilingDate;
    public GetSchedulesScheduleEQueryParams withMinFilingDate(LocalDate minFilingDate) {
        this.minFilingDate = minFilingDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleEQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=most_recent")
    public Boolean mostRecent;
    public GetSchedulesScheduleEQueryParams withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payee_name")
    public String[] payeeName;
    public GetSchedulesScheduleEQueryParams withPayeeName(String[] payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleEQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleEQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleEQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleEQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetSchedulesScheduleEQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=support_oppose_indicator")
    public GetSchedulesScheduleESupportOpposeIndicatorEnum[] supportOpposeIndicator;
    public GetSchedulesScheduleEQueryParams withSupportOpposeIndicator(GetSchedulesScheduleESupportOpposeIndicatorEnum[] supportOpposeIndicator) {
        this.supportOpposeIndicator = supportOpposeIndicator;
        return this;
    }
}