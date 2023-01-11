package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFailoverGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetFailoverGlobalClusterActionEnum action;
    public GetFailoverGlobalClusterQueryParams withAction(GetFailoverGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalClusterIdentifier")
    public String globalClusterIdentifier;
    public GetFailoverGlobalClusterQueryParams withGlobalClusterIdentifier(String globalClusterIdentifier) {
        this.globalClusterIdentifier = globalClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetDbClusterIdentifier")
    public String targetDbClusterIdentifier;
    public GetFailoverGlobalClusterQueryParams withTargetDbClusterIdentifier(String targetDbClusterIdentifier) {
        this.targetDbClusterIdentifier = targetDbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetFailoverGlobalClusterVersionEnum version;
    public GetFailoverGlobalClusterQueryParams withVersion(GetFailoverGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}