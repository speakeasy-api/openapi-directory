package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLoggerDefinitionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LoggerDefinitionId")
    public String loggerDefinitionId;
    public ListLoggerDefinitionVersionsPathParams withLoggerDefinitionId(String loggerDefinitionId) {
        this.loggerDefinitionId = loggerDefinitionId;
        return this;
    }
}