package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteFleetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteFleetsActionEnum action;
    public GetDeleteFleetsQueryParams withAction(GetDeleteFleetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteFleetsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FleetId")
    public String[] fleetId;
    public GetDeleteFleetsQueryParams withFleetId(String[] fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TerminateInstances")
    public Boolean terminateInstances;
    public GetDeleteFleetsQueryParams withTerminateInstances(Boolean terminateInstances) {
        this.terminateInstances = terminateInstances;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteFleetsVersionEnum version;
    public GetDeleteFleetsQueryParams withVersion(GetDeleteFleetsVersionEnum version) {
        this.version = version;
        return this;
    }
}