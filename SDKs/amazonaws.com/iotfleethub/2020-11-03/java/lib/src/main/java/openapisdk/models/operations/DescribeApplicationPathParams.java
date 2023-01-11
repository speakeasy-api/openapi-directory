package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public DescribeApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}