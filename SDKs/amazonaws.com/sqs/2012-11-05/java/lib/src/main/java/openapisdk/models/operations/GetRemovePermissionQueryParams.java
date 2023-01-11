package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemovePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemovePermissionActionEnum action;
    public GetRemovePermissionQueryParams withAction(GetRemovePermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Label")
    public String label;
    public GetRemovePermissionQueryParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemovePermissionVersionEnum version;
    public GetRemovePermissionQueryParams withVersion(GetRemovePermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}