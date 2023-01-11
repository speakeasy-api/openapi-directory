package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteGlobalClusterActionEnum action;
    public GetDeleteGlobalClusterQueryParams withAction(GetDeleteGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalClusterIdentifier")
    public String globalClusterIdentifier;
    public GetDeleteGlobalClusterQueryParams withGlobalClusterIdentifier(String globalClusterIdentifier) {
        this.globalClusterIdentifier = globalClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteGlobalClusterVersionEnum version;
    public GetDeleteGlobalClusterQueryParams withVersion(GetDeleteGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}