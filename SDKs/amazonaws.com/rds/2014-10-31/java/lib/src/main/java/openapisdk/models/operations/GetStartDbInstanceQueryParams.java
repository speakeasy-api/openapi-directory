package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartDbInstanceActionEnum action;
    public GetStartDbInstanceQueryParams withAction(GetStartDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetStartDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartDbInstanceVersionEnum version;
    public GetStartDbInstanceQueryParams withVersion(GetStartDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}