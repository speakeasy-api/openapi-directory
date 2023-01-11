package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRebootDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRebootDbInstanceActionEnum action;
    public GetRebootDbInstanceQueryParams withAction(GetRebootDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetRebootDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ForceFailover")
    public Boolean forceFailover;
    public GetRebootDbInstanceQueryParams withForceFailover(Boolean forceFailover) {
        this.forceFailover = forceFailover;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRebootDbInstanceVersionEnum version;
    public GetRebootDbInstanceQueryParams withVersion(GetRebootDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}