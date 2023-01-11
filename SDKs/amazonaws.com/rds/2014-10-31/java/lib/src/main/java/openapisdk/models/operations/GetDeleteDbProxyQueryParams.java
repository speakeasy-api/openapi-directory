package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbProxyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbProxyActionEnum action;
    public GetDeleteDbProxyQueryParams withAction(GetDeleteDbProxyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBProxyName")
    public String dbProxyName;
    public GetDeleteDbProxyQueryParams withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbProxyVersionEnum version;
    public GetDeleteDbProxyQueryParams withVersion(GetDeleteDbProxyVersionEnum version) {
        this.version = version;
        return this;
    }
}