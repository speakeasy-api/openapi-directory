package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public DescribeProjectPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}