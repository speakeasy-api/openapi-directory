package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClusterSubnetGroupActionEnum action;
    public PostCreateClusterSubnetGroupQueryParams withAction(PostCreateClusterSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClusterSubnetGroupVersionEnum version;
    public PostCreateClusterSubnetGroupQueryParams withVersion(PostCreateClusterSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}