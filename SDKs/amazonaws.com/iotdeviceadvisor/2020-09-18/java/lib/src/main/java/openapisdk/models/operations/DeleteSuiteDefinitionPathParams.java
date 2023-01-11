package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSuiteDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public DeleteSuiteDefinitionPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
}