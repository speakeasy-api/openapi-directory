package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInboxRegistrationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetInboxRegistrationsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=folder_behavior_id")
    public Integer folderBehaviorId;
    public GetInboxRegistrationsQueryParams withFolderBehaviorId(Integer folderBehaviorId) {
        this.folderBehaviorId = folderBehaviorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetInboxRegistrationsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}