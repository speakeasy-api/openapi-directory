package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLayerVersionPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;
    public RemoveLayerVersionPermissionPathParams withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StatementId")
    public String statementId;
    public RemoveLayerVersionPermissionPathParams withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=VersionNumber")
    public Long versionNumber;
    public RemoveLayerVersionPermissionPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}