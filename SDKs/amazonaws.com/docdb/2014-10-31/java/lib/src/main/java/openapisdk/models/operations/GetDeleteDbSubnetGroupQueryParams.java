package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbSubnetGroupActionEnum action;
    public GetDeleteDbSubnetGroupQueryParams withAction(GetDeleteDbSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSubnetGroupName")
    public String dbSubnetGroupName;
    public GetDeleteDbSubnetGroupQueryParams withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbSubnetGroupVersionEnum version;
    public GetDeleteDbSubnetGroupQueryParams withVersion(GetDeleteDbSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}