package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeletePlacementGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeletePlacementGroupActionEnum action;
    public GetDeletePlacementGroupQueryParams withAction(GetDeletePlacementGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeletePlacementGroupQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetDeletePlacementGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeletePlacementGroupVersionEnum version;
    public GetDeletePlacementGroupQueryParams withVersion(GetDeletePlacementGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}