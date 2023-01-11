package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegisterDbProxyTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRegisterDbProxyTargetsActionEnum action;
    public GetRegisterDbProxyTargetsQueryParams withAction(GetRegisterDbProxyTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifiers")
    public String[] dbClusterIdentifiers;
    public GetRegisterDbProxyTargetsQueryParams withDbClusterIdentifiers(String[] dbClusterIdentifiers) {
        this.dbClusterIdentifiers = dbClusterIdentifiers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifiers")
    public String[] dbInstanceIdentifiers;
    public GetRegisterDbProxyTargetsQueryParams withDbInstanceIdentifiers(String[] dbInstanceIdentifiers) {
        this.dbInstanceIdentifiers = dbInstanceIdentifiers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBProxyName")
    public String dbProxyName;
    public GetRegisterDbProxyTargetsQueryParams withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupName")
    public String targetGroupName;
    public GetRegisterDbProxyTargetsQueryParams withTargetGroupName(String targetGroupName) {
        this.targetGroupName = targetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRegisterDbProxyTargetsVersionEnum version;
    public GetRegisterDbProxyTargetsQueryParams withVersion(GetRegisterDbProxyTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}