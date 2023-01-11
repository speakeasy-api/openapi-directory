package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInstanceExportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateInstanceExportTaskActionEnum action;
    public PostCreateInstanceExportTaskQueryParams withAction(PostCreateInstanceExportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateInstanceExportTaskVersionEnum version;
    public PostCreateInstanceExportTaskQueryParams withVersion(PostCreateInstanceExportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}