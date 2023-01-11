package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyDbProxyTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyDbProxyTargetGroupActionEnum action;
    public GetModifyDbProxyTargetGroupQueryParams withAction(GetModifyDbProxyTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConnectionPoolConfig")
    public GetModifyDbProxyTargetGroupConnectionPoolConfig connectionPoolConfig;
    public GetModifyDbProxyTargetGroupQueryParams withConnectionPoolConfig(GetModifyDbProxyTargetGroupConnectionPoolConfig connectionPoolConfig) {
        this.connectionPoolConfig = connectionPoolConfig;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBProxyName")
    public String dbProxyName;
    public GetModifyDbProxyTargetGroupQueryParams withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewName")
    public String newName;
    public GetModifyDbProxyTargetGroupQueryParams withNewName(String newName) {
        this.newName = newName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupName")
    public String targetGroupName;
    public GetModifyDbProxyTargetGroupQueryParams withTargetGroupName(String targetGroupName) {
        this.targetGroupName = targetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyDbProxyTargetGroupVersionEnum version;
    public GetModifyDbProxyTargetGroupQueryParams withVersion(GetModifyDbProxyTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}