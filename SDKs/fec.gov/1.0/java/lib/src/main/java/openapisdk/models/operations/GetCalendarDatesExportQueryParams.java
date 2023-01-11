package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCalendarDatesExportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCalendarDatesExportQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=calendar_category_id")
    public Integer[] calendarCategoryId;
    public GetCalendarDatesExportQueryParams withCalendarCategoryId(Integer[] calendarCategoryId) {
        this.calendarCategoryId = calendarCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String[] description;
    public GetCalendarDatesExportQueryParams withDescription(String[] description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event_id")
    public Integer eventId;
    public GetCalendarDatesExportQueryParams withEventId(Integer eventId) {
        this.eventId = eventId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_end_date")
    public LocalDate maxEndDate;
    public GetCalendarDatesExportQueryParams withMaxEndDate(LocalDate maxEndDate) {
        this.maxEndDate = maxEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_start_date")
    public LocalDate maxStartDate;
    public GetCalendarDatesExportQueryParams withMaxStartDate(LocalDate maxStartDate) {
        this.maxStartDate = maxStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_end_date")
    public LocalDate minEndDate;
    public GetCalendarDatesExportQueryParams withMinEndDate(LocalDate minEndDate) {
        this.minEndDate = minEndDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_start_date")
    public LocalDate minStartDate;
    public GetCalendarDatesExportQueryParams withMinStartDate(LocalDate minStartDate) {
        this.minStartDate = minStartDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetCalendarDatesExportQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetCalendarDatesExportQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=renderer")
    public GetCalendarDatesExportRendererEnum renderer;
    public GetCalendarDatesExportQueryParams withRenderer(GetCalendarDatesExportRendererEnum renderer) {
        this.renderer = renderer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCalendarDatesExportQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetCalendarDatesExportQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetCalendarDatesExportQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetCalendarDatesExportQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=summary")
    public String[] summary;
    public GetCalendarDatesExportQueryParams withSummary(String[] summary) {
        this.summary = summary;
        return this;
    }
}