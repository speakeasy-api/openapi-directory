package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFailoverDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetFailoverDbClusterActionEnum action;
    public GetFailoverDbClusterQueryParams withAction(GetFailoverDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetFailoverDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetDBInstanceIdentifier")
    public String targetDBInstanceIdentifier;
    public GetFailoverDbClusterQueryParams withTargetDbInstanceIdentifier(String targetDBInstanceIdentifier) {
        this.targetDBInstanceIdentifier = targetDBInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetFailoverDbClusterVersionEnum version;
    public GetFailoverDbClusterQueryParams withVersion(GetFailoverDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}