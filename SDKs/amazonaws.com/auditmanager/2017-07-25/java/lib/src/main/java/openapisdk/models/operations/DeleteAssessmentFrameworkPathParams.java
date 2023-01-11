package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssessmentFrameworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=frameworkId")
    public String frameworkId;
    public DeleteAssessmentFrameworkPathParams withFrameworkId(String frameworkId) {
        this.frameworkId = frameworkId;
        return this;
    }
}