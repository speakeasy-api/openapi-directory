package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterMaintenanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterMaintenanceActionEnum action;
    public PostModifyClusterMaintenanceQueryParams withAction(PostModifyClusterMaintenanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterMaintenanceVersionEnum version;
    public PostModifyClusterMaintenanceQueryParams withVersion(PostModifyClusterMaintenanceVersionEnum version) {
        this.version = version;
        return this;
    }
}