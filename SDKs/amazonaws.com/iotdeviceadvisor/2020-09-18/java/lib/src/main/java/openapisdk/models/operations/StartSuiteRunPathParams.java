package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSuiteRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public StartSuiteRunPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
}