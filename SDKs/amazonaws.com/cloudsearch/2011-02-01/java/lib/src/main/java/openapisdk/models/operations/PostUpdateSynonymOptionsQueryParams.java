package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSynonymOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateSynonymOptionsActionEnum action;
    public PostUpdateSynonymOptionsQueryParams withAction(PostUpdateSynonymOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateSynonymOptionsVersionEnum version;
    public PostUpdateSynonymOptionsQueryParams withVersion(PostUpdateSynonymOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}