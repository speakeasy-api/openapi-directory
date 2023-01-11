package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbSubnetGroupActionEnum action;
    public PostCreateDbSubnetGroupQueryParams withAction(PostCreateDbSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbSubnetGroupVersionEnum version;
    public PostCreateDbSubnetGroupQueryParams withVersion(PostCreateDbSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}