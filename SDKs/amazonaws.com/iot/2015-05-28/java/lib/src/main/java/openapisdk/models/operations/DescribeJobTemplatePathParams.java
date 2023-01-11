package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobTemplateId")
    public String jobTemplateId;
    public DescribeJobTemplatePathParams withJobTemplateId(String jobTemplateId) {
        this.jobTemplateId = jobTemplateId;
        return this;
    }
}