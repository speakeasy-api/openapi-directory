package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCoreDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CoreDefinitionId")
    public String coreDefinitionId;
    public CreateCoreDefinitionVersionPathParams withCoreDefinitionId(String coreDefinitionId) {
        this.coreDefinitionId = coreDefinitionId;
        return this;
    }
}