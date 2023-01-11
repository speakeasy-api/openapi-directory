package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveFromGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveFromGlobalClusterActionEnum action;
    public GetRemoveFromGlobalClusterQueryParams withAction(GetRemoveFromGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DbClusterIdentifier")
    public String dbClusterIdentifier;
    public GetRemoveFromGlobalClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalClusterIdentifier")
    public String globalClusterIdentifier;
    public GetRemoveFromGlobalClusterQueryParams withGlobalClusterIdentifier(String globalClusterIdentifier) {
        this.globalClusterIdentifier = globalClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveFromGlobalClusterVersionEnum version;
    public GetRemoveFromGlobalClusterQueryParams withVersion(GetRemoveFromGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}