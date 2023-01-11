package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClusterSubnetGroupActionEnum action;
    public PostDeleteClusterSubnetGroupQueryParams withAction(PostDeleteClusterSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClusterSubnetGroupVersionEnum version;
    public PostDeleteClusterSubnetGroupQueryParams withVersion(PostDeleteClusterSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}