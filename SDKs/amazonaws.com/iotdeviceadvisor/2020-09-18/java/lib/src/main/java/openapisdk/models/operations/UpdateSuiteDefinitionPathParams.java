package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSuiteDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public UpdateSuiteDefinitionPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
}