package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeValidDbInstanceModificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeValidDbInstanceModificationsActionEnum action;
    public GetDescribeValidDbInstanceModificationsQueryParams withAction(GetDescribeValidDbInstanceModificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetDescribeValidDbInstanceModificationsQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeValidDbInstanceModificationsVersionEnum version;
    public GetDescribeValidDbInstanceModificationsQueryParams withVersion(GetDescribeValidDbInstanceModificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}