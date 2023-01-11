package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCurrentDbClusterCapacityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyCurrentDbClusterCapacityActionEnum action;
    public PostModifyCurrentDbClusterCapacityQueryParams withAction(PostModifyCurrentDbClusterCapacityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyCurrentDbClusterCapacityVersionEnum version;
    public PostModifyCurrentDbClusterCapacityQueryParams withVersion(PostModifyCurrentDbClusterCapacityVersionEnum version) {
        this.version = version;
        return this;
    }
}