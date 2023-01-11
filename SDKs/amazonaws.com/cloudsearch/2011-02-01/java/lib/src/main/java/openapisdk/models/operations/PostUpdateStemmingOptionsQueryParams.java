package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateStemmingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateStemmingOptionsActionEnum action;
    public PostUpdateStemmingOptionsQueryParams withAction(PostUpdateStemmingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateStemmingOptionsVersionEnum version;
    public PostUpdateStemmingOptionsQueryParams withVersion(PostUpdateStemmingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}