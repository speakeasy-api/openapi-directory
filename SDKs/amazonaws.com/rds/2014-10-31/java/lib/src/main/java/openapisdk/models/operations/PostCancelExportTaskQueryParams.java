package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelExportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelExportTaskActionEnum action;
    public PostCancelExportTaskQueryParams withAction(PostCancelExportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelExportTaskVersionEnum version;
    public PostCancelExportTaskQueryParams withVersion(PostCancelExportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}