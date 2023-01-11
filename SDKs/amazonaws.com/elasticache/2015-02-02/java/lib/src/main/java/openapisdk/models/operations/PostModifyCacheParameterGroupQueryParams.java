package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCacheParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyCacheParameterGroupActionEnum action;
    public PostModifyCacheParameterGroupQueryParams withAction(PostModifyCacheParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyCacheParameterGroupVersionEnum version;
    public PostModifyCacheParameterGroupQueryParams withVersion(PostModifyCacheParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}