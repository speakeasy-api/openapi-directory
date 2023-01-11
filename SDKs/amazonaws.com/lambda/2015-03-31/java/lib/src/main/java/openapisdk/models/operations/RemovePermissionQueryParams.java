package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public RemovePermissionQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RevisionId")
    public String revisionId;
    public RemovePermissionQueryParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}