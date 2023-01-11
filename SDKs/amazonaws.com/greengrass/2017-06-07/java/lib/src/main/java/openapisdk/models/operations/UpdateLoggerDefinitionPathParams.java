package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLoggerDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionId")
    public String loggerDefinitionId;
    public UpdateLoggerDefinitionPathParams withLoggerDefinitionId(String loggerDefinitionId) {
        this.loggerDefinitionId = loggerDefinitionId;
        return this;
    }
}