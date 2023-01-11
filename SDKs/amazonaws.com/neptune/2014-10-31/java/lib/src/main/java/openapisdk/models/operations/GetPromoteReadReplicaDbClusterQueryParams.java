package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPromoteReadReplicaDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPromoteReadReplicaDbClusterActionEnum action;
    public GetPromoteReadReplicaDbClusterQueryParams withAction(GetPromoteReadReplicaDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetPromoteReadReplicaDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPromoteReadReplicaDbClusterVersionEnum version;
    public GetPromoteReadReplicaDbClusterQueryParams withVersion(GetPromoteReadReplicaDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}