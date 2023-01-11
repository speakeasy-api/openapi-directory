package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeregisterDbProxyTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeregisterDbProxyTargetsActionEnum action;
    public GetDeregisterDbProxyTargetsQueryParams withAction(GetDeregisterDbProxyTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifiers")
    public String[] dbClusterIdentifiers;
    public GetDeregisterDbProxyTargetsQueryParams withDbClusterIdentifiers(String[] dbClusterIdentifiers) {
        this.dbClusterIdentifiers = dbClusterIdentifiers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifiers")
    public String[] dbInstanceIdentifiers;
    public GetDeregisterDbProxyTargetsQueryParams withDbInstanceIdentifiers(String[] dbInstanceIdentifiers) {
        this.dbInstanceIdentifiers = dbInstanceIdentifiers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBProxyName")
    public String dbProxyName;
    public GetDeregisterDbProxyTargetsQueryParams withDbProxyName(String dbProxyName) {
        this.dbProxyName = dbProxyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupName")
    public String targetGroupName;
    public GetDeregisterDbProxyTargetsQueryParams withTargetGroupName(String targetGroupName) {
        this.targetGroupName = targetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeregisterDbProxyTargetsVersionEnum version;
    public GetDeregisterDbProxyTargetsQueryParams withVersion(GetDeregisterDbProxyTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}