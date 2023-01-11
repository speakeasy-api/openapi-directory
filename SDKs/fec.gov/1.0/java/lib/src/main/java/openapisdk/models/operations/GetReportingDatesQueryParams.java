package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetReportingDatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetReportingDatesQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_create_date")
    public LocalDate maxCreateDate;
    public GetReportingDatesQueryParams withMaxCreateDate(LocalDate maxCreateDate) {
        this.maxCreateDate = maxCreateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_due_date")
    public LocalDate maxDueDate;
    public GetReportingDatesQueryParams withMaxDueDate(LocalDate maxDueDate) {
        this.maxDueDate = maxDueDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_update_date")
    public LocalDate maxUpdateDate;
    public GetReportingDatesQueryParams withMaxUpdateDate(LocalDate maxUpdateDate) {
        this.maxUpdateDate = maxUpdateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_create_date")
    public LocalDate minCreateDate;
    public GetReportingDatesQueryParams withMinCreateDate(LocalDate minCreateDate) {
        this.minCreateDate = minCreateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_due_date")
    public LocalDate minDueDate;
    public GetReportingDatesQueryParams withMinDueDate(LocalDate minDueDate) {
        this.minDueDate = minDueDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_update_date")
    public LocalDate minUpdateDate;
    public GetReportingDatesQueryParams withMinUpdateDate(LocalDate minUpdateDate) {
        this.minUpdateDate = minUpdateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetReportingDatesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetReportingDatesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_type")
    public String[] reportType;
    public GetReportingDatesQueryParams withReportType(String[] reportType) {
        this.reportType = reportType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_year")
    public Integer[] reportYear;
    public GetReportingDatesQueryParams withReportYear(Integer[] reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetReportingDatesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetReportingDatesQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetReportingDatesQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetReportingDatesQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}