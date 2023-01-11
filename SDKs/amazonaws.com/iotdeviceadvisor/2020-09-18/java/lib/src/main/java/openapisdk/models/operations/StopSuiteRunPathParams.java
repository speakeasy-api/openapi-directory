package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopSuiteRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public StopSuiteRunPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteRunId")
    public String suiteRunId;
    public StopSuiteRunPathParams withSuiteRunId(String suiteRunId) {
        this.suiteRunId = suiteRunId;
        return this;
    }
}