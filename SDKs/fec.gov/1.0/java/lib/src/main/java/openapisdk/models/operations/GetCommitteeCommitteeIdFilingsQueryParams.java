package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCommitteeCommitteeIdFilingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amendment_indicator")
    public GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum[] amendmentIndicator;
    public GetCommitteeCommitteeIdFilingsQueryParams withAmendmentIndicator(GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum[] amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCommitteeCommitteeIdFilingsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beginning_image_number")
    public String[] beginningImageNumber;
    public GetCommitteeCommitteeIdFilingsQueryParams withBeginningImageNumber(String[] beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public String committeeType;
    public GetCommitteeCommitteeIdFilingsQueryParams withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetCommitteeCommitteeIdFilingsQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetCommitteeCommitteeIdFilingsQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=document_type")
    public String[] documentType;
    public GetCommitteeCommitteeIdFilingsQueryParams withDocumentType(String[] documentType) {
        this.documentType = documentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_number")
    public Integer[] fileNumber;
    public GetCommitteeCommitteeIdFilingsQueryParams withFileNumber(Integer[] fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filer_type")
    public GetCommitteeCommitteeIdFilingsFilerTypeEnum filerType;
    public GetCommitteeCommitteeIdFilingsQueryParams withFilerType(GetCommitteeCommitteeIdFilingsFilerTypeEnum filerType) {
        this.filerType = filerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=form_category")
    public String[] formCategory;
    public GetCommitteeCommitteeIdFilingsQueryParams withFormCategory(String[] formCategory) {
        this.formCategory = formCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=form_type")
    public String[] formType;
    public GetCommitteeCommitteeIdFilingsQueryParams withFormType(String[] formType) {
        this.formType = formType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_amended")
    public Boolean isAmended;
    public GetCommitteeCommitteeIdFilingsQueryParams withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipt_date")
    public LocalDate maxReceiptDate;
    public GetCommitteeCommitteeIdFilingsQueryParams withMaxReceiptDate(LocalDate maxReceiptDate) {
        this.maxReceiptDate = maxReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipt_date")
    public LocalDate minReceiptDate;
    public GetCommitteeCommitteeIdFilingsQueryParams withMinReceiptDate(LocalDate minReceiptDate) {
        this.minReceiptDate = minReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=most_recent")
    public Boolean mostRecent;
    public GetCommitteeCommitteeIdFilingsQueryParams withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetCommitteeCommitteeIdFilingsOfficeEnum[] office;
    public GetCommitteeCommitteeIdFilingsQueryParams withOffice(GetCommitteeCommitteeIdFilingsOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCommitteeCommitteeIdFilingsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=party")
    public String[] party;
    public GetCommitteeCommitteeIdFilingsQueryParams withParty(String[] party) {
        this.party = party;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCommitteeCommitteeIdFilingsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=primary_general_indicator")
    public String[] primaryGeneralIndicator;
    public GetCommitteeCommitteeIdFilingsQueryParams withPrimaryGeneralIndicator(String[] primaryGeneralIndicator) {
        this.primaryGeneralIndicator = primaryGeneralIndicator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_type")
    public String[] reportType;
    public GetCommitteeCommitteeIdFilingsQueryParams withReportType(String[] reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_year")
    public Integer[] reportYear;
    public GetCommitteeCommitteeIdFilingsQueryParams withReportYear(Integer[] reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_type")
    public String[] requestType;
    public GetCommitteeCommitteeIdFilingsQueryParams withRequestType(String[] requestType) {
        this.requestType = requestType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetCommitteeCommitteeIdFilingsQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCommitteeCommitteeIdFilingsQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCommitteeCommitteeIdFilingsQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCommitteeCommitteeIdFilingsQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetCommitteeCommitteeIdFilingsQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
}