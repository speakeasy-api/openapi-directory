package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableLoggingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableLoggingActionEnum action;
    public GetDisableLoggingQueryParams withAction(GetDisableLoggingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDisableLoggingQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableLoggingVersionEnum version;
    public GetDisableLoggingQueryParams withVersion(GetDisableLoggingVersionEnum version) {
        this.version = version;
        return this;
    }
}