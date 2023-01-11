package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAvailableSolutionStacksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAvailableSolutionStacksActionEnum action;
    public PostListAvailableSolutionStacksQueryParams withAction(PostListAvailableSolutionStacksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAvailableSolutionStacksVersionEnum version;
    public PostListAvailableSolutionStacksQueryParams withVersion(PostListAvailableSolutionStacksVersionEnum version) {
        this.version = version;
        return this;
    }
}