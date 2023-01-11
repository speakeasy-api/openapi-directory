package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbSubnetGroupActionEnum action;
    public PostModifyDbSubnetGroupQueryParams withAction(PostModifyDbSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbSubnetGroupVersionEnum version;
    public PostModifyDbSubnetGroupQueryParams withVersion(PostModifyDbSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}