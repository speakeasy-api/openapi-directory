package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuiteRunReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public GetSuiteRunReportPathParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=suiteRunId")
    public String suiteRunId;
    public GetSuiteRunReportPathParams withSuiteRunId(String suiteRunId) {
        this.suiteRunId = suiteRunId;
        return this;
    }
}