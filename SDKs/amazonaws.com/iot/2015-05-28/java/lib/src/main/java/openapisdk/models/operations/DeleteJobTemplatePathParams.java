package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobTemplateId")
    public String jobTemplateId;
    public DeleteJobTemplatePathParams withJobTemplateId(String jobTemplateId) {
        this.jobTemplateId = jobTemplateId;
        return this;
    }
}