package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartExportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartExportTaskActionEnum action;
    public PostStartExportTaskQueryParams withAction(PostStartExportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartExportTaskVersionEnum version;
    public PostStartExportTaskQueryParams withVersion(PostStartExportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}