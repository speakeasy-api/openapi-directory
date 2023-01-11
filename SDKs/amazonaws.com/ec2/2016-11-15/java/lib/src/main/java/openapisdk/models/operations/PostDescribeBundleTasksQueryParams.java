package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeBundleTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeBundleTasksActionEnum action;
    public PostDescribeBundleTasksQueryParams withAction(PostDescribeBundleTasksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeBundleTasksVersionEnum version;
    public PostDescribeBundleTasksQueryParams withVersion(PostDescribeBundleTasksVersionEnum version) {
        this.version = version;
        return this;
    }
}