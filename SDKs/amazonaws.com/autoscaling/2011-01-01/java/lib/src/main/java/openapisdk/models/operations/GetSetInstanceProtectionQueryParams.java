package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetInstanceProtectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetInstanceProtectionActionEnum action;
    public GetSetInstanceProtectionQueryParams withAction(GetSetInstanceProtectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetSetInstanceProtectionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceIds")
    public String[] instanceIds;
    public GetSetInstanceProtectionQueryParams withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProtectedFromScaleIn")
    public Boolean protectedFromScaleIn;
    public GetSetInstanceProtectionQueryParams withProtectedFromScaleIn(Boolean protectedFromScaleIn) {
        this.protectedFromScaleIn = protectedFromScaleIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetInstanceProtectionVersionEnum version;
    public GetSetInstanceProtectionQueryParams withVersion(GetSetInstanceProtectionVersionEnum version) {
        this.version = version;
        return this;
    }
}