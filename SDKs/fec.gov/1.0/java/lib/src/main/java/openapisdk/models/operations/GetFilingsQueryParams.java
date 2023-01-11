package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetFilingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amendment_indicator")
    public GetFilingsAmendmentIndicatorEnum[] amendmentIndicator;
    public GetFilingsQueryParams withAmendmentIndicator(GetFilingsAmendmentIndicatorEnum[] amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetFilingsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beginning_image_number")
    public String[] beginningImageNumber;
    public GetFilingsQueryParams withBeginningImageNumber(String[] beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetFilingsQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetFilingsQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public String committeeType;
    public GetFilingsQueryParams withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetFilingsQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetFilingsQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=document_type")
    public String[] documentType;
    public GetFilingsQueryParams withDocumentType(String[] documentType) {
        this.documentType = documentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_number")
    public Integer[] fileNumber;
    public GetFilingsQueryParams withFileNumber(Integer[] fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filer_type")
    public GetFilingsFilerTypeEnum filerType;
    public GetFilingsQueryParams withFilerType(GetFilingsFilerTypeEnum filerType) {
        this.filerType = filerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=form_category")
    public String[] formCategory;
    public GetFilingsQueryParams withFormCategory(String[] formCategory) {
        this.formCategory = formCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=form_type")
    public String[] formType;
    public GetFilingsQueryParams withFormType(String[] formType) {
        this.formType = formType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_amended")
    public Boolean isAmended;
    public GetFilingsQueryParams withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipt_date")
    public LocalDate maxReceiptDate;
    public GetFilingsQueryParams withMaxReceiptDate(LocalDate maxReceiptDate) {
        this.maxReceiptDate = maxReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipt_date")
    public LocalDate minReceiptDate;
    public GetFilingsQueryParams withMinReceiptDate(LocalDate minReceiptDate) {
        this.minReceiptDate = minReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=most_recent")
    public Boolean mostRecent;
    public GetFilingsQueryParams withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetFilingsOfficeEnum[] office;
    public GetFilingsQueryParams withOffice(GetFilingsOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetFilingsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetFilingsQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetFilingsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=primary_general_indicator")
    public String[] primaryGeneralIndicator;
    public GetFilingsQueryParams withPrimaryGeneralIndicator(String[] primaryGeneralIndicator) {
        this.primaryGeneralIndicator = primaryGeneralIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_type")
    public String[] reportType;
    public GetFilingsQueryParams withReportType(String[] reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_year")
    public Integer[] reportYear;
    public GetFilingsQueryParams withReportYear(Integer[] reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_type")
    public String[] requestType;
    public GetFilingsQueryParams withRequestType(String[] requestType) {
        this.requestType = requestType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetFilingsQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetFilingsQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetFilingsQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetFilingsQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetFilingsQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
}