package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCoreDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CoreDefinitionId")
    public String coreDefinitionId;
    public UpdateCoreDefinitionPathParams withCoreDefinitionId(String coreDefinitionId) {
        this.coreDefinitionId = coreDefinitionId;
        return this;
    }
}