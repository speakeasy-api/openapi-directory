package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCoreDefinitionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CoreDefinitionId")
    public String coreDefinitionId;
    public ListCoreDefinitionVersionsPathParams withCoreDefinitionId(String coreDefinitionId) {
        this.coreDefinitionId = coreDefinitionId;
        return this;
    }
}