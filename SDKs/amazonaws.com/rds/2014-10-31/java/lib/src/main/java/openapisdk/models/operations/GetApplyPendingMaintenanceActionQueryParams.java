package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplyPendingMaintenanceActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetApplyPendingMaintenanceActionActionEnum action;
    public GetApplyPendingMaintenanceActionQueryParams withAction(GetApplyPendingMaintenanceActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplyAction")
    public String applyAction;
    public GetApplyPendingMaintenanceActionQueryParams withApplyAction(String applyAction) {
        this.applyAction = applyAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptInType")
    public String optInType;
    public GetApplyPendingMaintenanceActionQueryParams withOptInType(String optInType) {
        this.optInType = optInType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceIdentifier")
    public String resourceIdentifier;
    public GetApplyPendingMaintenanceActionQueryParams withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetApplyPendingMaintenanceActionVersionEnum version;
    public GetApplyPendingMaintenanceActionQueryParams withVersion(GetApplyPendingMaintenanceActionVersionEnum version) {
        this.version = version;
        return this;
    }
}