package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClusterSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClusterSubnetGroupActionEnum action;
    public GetDeleteClusterSubnetGroupQueryParams withAction(GetDeleteClusterSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterSubnetGroupName")
    public String clusterSubnetGroupName;
    public GetDeleteClusterSubnetGroupQueryParams withClusterSubnetGroupName(String clusterSubnetGroupName) {
        this.clusterSubnetGroupName = clusterSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClusterSubnetGroupVersionEnum version;
    public GetDeleteClusterSubnetGroupQueryParams withVersion(GetDeleteClusterSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}