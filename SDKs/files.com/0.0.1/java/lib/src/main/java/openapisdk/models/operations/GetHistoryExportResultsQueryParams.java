package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHistoryExportResultsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetHistoryExportResultsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=history_export_id")
    public Integer historyExportId;
    public GetHistoryExportResultsQueryParams withHistoryExportId(Integer historyExportId) {
        this.historyExportId = historyExportId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetHistoryExportResultsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetHistoryExportResultsQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}