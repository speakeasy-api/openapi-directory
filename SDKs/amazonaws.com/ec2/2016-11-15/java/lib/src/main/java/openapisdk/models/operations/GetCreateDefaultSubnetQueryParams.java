package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateDefaultSubnetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateDefaultSubnetActionEnum action;
    public GetCreateDefaultSubnetQueryParams withAction(GetCreateDefaultSubnetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZone")
    public String availabilityZone;
    public GetCreateDefaultSubnetQueryParams withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateDefaultSubnetQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateDefaultSubnetVersionEnum version;
    public GetCreateDefaultSubnetQueryParams withVersion(GetCreateDefaultSubnetVersionEnum version) {
        this.version = version;
        return this;
    }
}