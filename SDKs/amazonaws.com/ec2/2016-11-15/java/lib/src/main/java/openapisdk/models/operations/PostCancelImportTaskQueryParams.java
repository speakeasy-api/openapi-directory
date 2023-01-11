package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelImportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelImportTaskActionEnum action;
    public PostCancelImportTaskQueryParams withAction(PostCancelImportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelImportTaskVersionEnum version;
    public PostCancelImportTaskQueryParams withVersion(PostCancelImportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}