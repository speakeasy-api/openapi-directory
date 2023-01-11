package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionNotificationExportResultsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action_notification_export_id")
    public Integer actionNotificationExportId;
    public GetActionNotificationExportResultsQueryParams withActionNotificationExportId(Integer actionNotificationExportId) {
        this.actionNotificationExportId = actionNotificationExportId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetActionNotificationExportResultsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetActionNotificationExportResultsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetActionNotificationExportResultsQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}