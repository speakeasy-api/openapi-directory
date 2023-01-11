package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoggerDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionId")
    public String loggerDefinitionId;
    public GetLoggerDefinitionVersionPathParams withLoggerDefinitionId(String loggerDefinitionId) {
        this.loggerDefinitionId = loggerDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionVersionId")
    public String loggerDefinitionVersionId;
    public GetLoggerDefinitionVersionPathParams withLoggerDefinitionVersionId(String loggerDefinitionVersionId) {
        this.loggerDefinitionVersionId = loggerDefinitionVersionId;
        return this;
    }
}