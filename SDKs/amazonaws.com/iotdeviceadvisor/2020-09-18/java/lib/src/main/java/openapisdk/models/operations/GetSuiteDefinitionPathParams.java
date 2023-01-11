package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuiteDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public GetSuiteDefinitionPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
}