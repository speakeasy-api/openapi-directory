package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeExportTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeExportTasksActionEnum action;
    public PostDescribeExportTasksQueryParams withAction(PostDescribeExportTasksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeExportTasksVersionEnum version;
    public PostDescribeExportTasksQueryParams withVersion(PostDescribeExportTasksVersionEnum version) {
        this.version = version;
        return this;
    }
}