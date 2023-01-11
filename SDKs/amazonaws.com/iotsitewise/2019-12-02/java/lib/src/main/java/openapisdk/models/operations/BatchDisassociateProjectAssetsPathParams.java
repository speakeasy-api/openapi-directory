package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateProjectAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public BatchDisassociateProjectAssetsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}