package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyAvailabilityZoneGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyAvailabilityZoneGroupActionEnum action;
    public GetModifyAvailabilityZoneGroupQueryParams withAction(GetModifyAvailabilityZoneGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyAvailabilityZoneGroupQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetModifyAvailabilityZoneGroupQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptInStatus")
    public GetModifyAvailabilityZoneGroupOptInStatusEnum optInStatus;
    public GetModifyAvailabilityZoneGroupQueryParams withOptInStatus(GetModifyAvailabilityZoneGroupOptInStatusEnum optInStatus) {
        this.optInStatus = optInStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyAvailabilityZoneGroupVersionEnum version;
    public GetModifyAvailabilityZoneGroupQueryParams withVersion(GetModifyAvailabilityZoneGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}