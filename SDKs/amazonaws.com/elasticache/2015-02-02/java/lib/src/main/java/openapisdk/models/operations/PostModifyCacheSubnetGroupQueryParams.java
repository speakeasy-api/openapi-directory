package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCacheSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyCacheSubnetGroupActionEnum action;
    public PostModifyCacheSubnetGroupQueryParams withAction(PostModifyCacheSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyCacheSubnetGroupVersionEnum version;
    public PostModifyCacheSubnetGroupQueryParams withVersion(PostModifyCacheSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}