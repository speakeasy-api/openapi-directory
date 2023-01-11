package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DescribeProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}