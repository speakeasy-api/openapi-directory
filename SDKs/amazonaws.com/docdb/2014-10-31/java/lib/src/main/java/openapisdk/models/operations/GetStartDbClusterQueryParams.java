package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartDbClusterActionEnum action;
    public GetStartDbClusterQueryParams withAction(GetStartDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetStartDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartDbClusterVersionEnum version;
    public GetStartDbClusterQueryParams withVersion(GetStartDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}