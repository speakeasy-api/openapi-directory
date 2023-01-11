package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentFrameworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=frameworkId")
    public String frameworkId;
    public UpdateAssessmentFrameworkPathParams withFrameworkId(String frameworkId) {
        this.frameworkId = frameworkId;
        return this;
    }
}