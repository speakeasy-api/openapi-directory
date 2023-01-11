package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplyPendingMaintenanceActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostApplyPendingMaintenanceActionActionEnum action;
    public PostApplyPendingMaintenanceActionQueryParams withAction(PostApplyPendingMaintenanceActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostApplyPendingMaintenanceActionVersionEnum version;
    public PostApplyPendingMaintenanceActionQueryParams withVersion(PostApplyPendingMaintenanceActionVersionEnum version) {
        this.version = version;
        return this;
    }
}