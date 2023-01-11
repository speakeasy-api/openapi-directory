package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class HistoryListLoginsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public HistoryListLoginsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=display")
    public String display;
    public HistoryListLoginsQueryParams withDisplay(String display) {
        this.display = display;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_at")
    public OffsetDateTime endAt;
    public HistoryListLoginsQueryParams withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public HistoryListLoginsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public HistoryListLoginsQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_at")
    public OffsetDateTime startAt;
    public HistoryListLoginsQueryParams withStartAt(OffsetDateTime startAt) {
        this.startAt = startAt;
        return this;
    }
}