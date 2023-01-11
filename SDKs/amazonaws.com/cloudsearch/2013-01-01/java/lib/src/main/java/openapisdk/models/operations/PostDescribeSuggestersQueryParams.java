package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSuggestersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSuggestersActionEnum action;
    public PostDescribeSuggestersQueryParams withAction(PostDescribeSuggestersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSuggestersVersionEnum version;
    public PostDescribeSuggestersQueryParams withVersion(PostDescribeSuggestersVersionEnum version) {
        this.version = version;
        return this;
    }
}