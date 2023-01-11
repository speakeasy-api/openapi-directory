package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLayerVersionPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RevisionId")
    public String revisionId;
    public AddLayerVersionPermissionQueryParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}