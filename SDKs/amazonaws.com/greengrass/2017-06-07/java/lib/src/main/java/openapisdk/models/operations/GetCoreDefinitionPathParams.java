package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoreDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CoreDefinitionId")
    public String coreDefinitionId;
    public GetCoreDefinitionPathParams withCoreDefinitionId(String coreDefinitionId) {
        this.coreDefinitionId = coreDefinitionId;
        return this;
    }
}