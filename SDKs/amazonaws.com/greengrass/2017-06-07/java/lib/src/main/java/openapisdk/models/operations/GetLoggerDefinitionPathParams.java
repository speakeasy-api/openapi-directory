package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoggerDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionId")
    public String loggerDefinitionId;
    public GetLoggerDefinitionPathParams withLoggerDefinitionId(String loggerDefinitionId) {
        this.loggerDefinitionId = loggerDefinitionId;
        return this;
    }
}