package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePlacementGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePlacementGroupsActionEnum action;
    public PostDescribePlacementGroupsQueryParams withAction(PostDescribePlacementGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePlacementGroupsVersionEnum version;
    public PostDescribePlacementGroupsQueryParams withVersion(PostDescribePlacementGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}