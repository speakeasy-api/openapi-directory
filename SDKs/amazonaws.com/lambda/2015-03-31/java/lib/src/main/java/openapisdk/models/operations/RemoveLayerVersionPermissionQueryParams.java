package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLayerVersionPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RevisionId")
    public String revisionId;
    public RemoveLayerVersionPermissionQueryParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}