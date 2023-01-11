package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLoggerDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionId")
    public String loggerDefinitionId;
    public DeleteLoggerDefinitionPathParams withLoggerDefinitionId(String loggerDefinitionId) {
        this.loggerDefinitionId = loggerDefinitionId;
        return this;
    }
}