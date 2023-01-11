package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterSubnetGroupActionEnum action;
    public PostModifyClusterSubnetGroupQueryParams withAction(PostModifyClusterSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterSubnetGroupVersionEnum version;
    public PostModifyClusterSubnetGroupQueryParams withVersion(PostModifyClusterSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}