package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateJobTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobTemplateId")
    public String jobTemplateId;
    public CreateJobTemplatePathParams withJobTemplateId(String jobTemplateId) {
        this.jobTemplateId = jobTemplateId;
        return this;
    }
}