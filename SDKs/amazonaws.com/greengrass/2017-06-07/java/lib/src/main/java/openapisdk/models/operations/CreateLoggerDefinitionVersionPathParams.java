package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLoggerDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionId")
    public String loggerDefinitionId;
    public CreateLoggerDefinitionVersionPathParams withLoggerDefinitionId(String loggerDefinitionId) {
        this.loggerDefinitionId = loggerDefinitionId;
        return this;
    }
}