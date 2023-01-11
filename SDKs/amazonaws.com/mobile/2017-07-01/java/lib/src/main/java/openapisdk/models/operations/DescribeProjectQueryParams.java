package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projectId")
    public String projectId;
    public DescribeProjectQueryParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncFromResources")
    public Boolean syncFromResources;
    public DescribeProjectQueryParams withSyncFromResources(Boolean syncFromResources) {
        this.syncFromResources = syncFromResources;
        return this;
    }
}