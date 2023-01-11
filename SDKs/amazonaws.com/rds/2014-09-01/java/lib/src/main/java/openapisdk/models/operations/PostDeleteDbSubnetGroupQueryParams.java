package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbSubnetGroupActionEnum action;
    public PostDeleteDbSubnetGroupQueryParams withAction(PostDeleteDbSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbSubnetGroupVersionEnum version;
    public PostDeleteDbSubnetGroupQueryParams withVersion(PostDeleteDbSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}