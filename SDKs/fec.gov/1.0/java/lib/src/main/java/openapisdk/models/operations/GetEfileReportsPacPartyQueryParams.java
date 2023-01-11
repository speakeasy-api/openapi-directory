package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEfileReportsPacPartyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetEfileReportsPacPartyQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetEfileReportsPacPartyQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_number")
    public Integer[] fileNumber;
    public GetEfileReportsPacPartyQueryParams withFileNumber(Integer[] fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_receipt_date")
    public LocalDate maxReceiptDate;
    public GetEfileReportsPacPartyQueryParams withMaxReceiptDate(LocalDate maxReceiptDate) {
        this.maxReceiptDate = maxReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_receipt_date")
    public LocalDate minReceiptDate;
    public GetEfileReportsPacPartyQueryParams withMinReceiptDate(LocalDate minReceiptDate) {
        this.minReceiptDate = minReceiptDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetEfileReportsPacPartyQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetEfileReportsPacPartyQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetEfileReportsPacPartyQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetEfileReportsPacPartyQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetEfileReportsPacPartyQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetEfileReportsPacPartyQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}