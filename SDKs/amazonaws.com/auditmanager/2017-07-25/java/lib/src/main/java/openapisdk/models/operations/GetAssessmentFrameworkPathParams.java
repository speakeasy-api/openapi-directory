package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssessmentFrameworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=frameworkId")
    public String frameworkId;
    public GetAssessmentFrameworkPathParams withFrameworkId(String frameworkId) {
        this.frameworkId = frameworkId;
        return this;
    }
}