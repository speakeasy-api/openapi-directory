package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=revisionId")
    public String revisionId;
    public RemovePermissionQueryParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}