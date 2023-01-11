package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoreDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CoreDefinitionId")
    public String coreDefinitionId;
    public GetCoreDefinitionVersionPathParams withCoreDefinitionId(String coreDefinitionId) {
        this.coreDefinitionId = coreDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CoreDefinitionVersionId")
    public String coreDefinitionVersionId;
    public GetCoreDefinitionVersionPathParams withCoreDefinitionVersionId(String coreDefinitionVersionId) {
        this.coreDefinitionVersionId = coreDefinitionVersionId;
        return this;
    }
}