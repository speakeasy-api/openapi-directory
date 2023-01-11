package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuiteRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public GetSuiteRunPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteRunId")
    public String suiteRunId;
    public GetSuiteRunPathParams withSuiteRunId(String suiteRunId) {
        this.suiteRunId = suiteRunId;
        return this;
    }
}