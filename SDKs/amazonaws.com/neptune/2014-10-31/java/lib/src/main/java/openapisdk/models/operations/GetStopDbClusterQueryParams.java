package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStopDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStopDbClusterActionEnum action;
    public GetStopDbClusterQueryParams withAction(GetStopDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetStopDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStopDbClusterVersionEnum version;
    public GetStopDbClusterQueryParams withVersion(GetStopDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}