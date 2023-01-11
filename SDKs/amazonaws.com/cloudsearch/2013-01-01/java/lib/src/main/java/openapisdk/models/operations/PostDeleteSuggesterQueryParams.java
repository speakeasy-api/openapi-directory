package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSuggesterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSuggesterActionEnum action;
    public PostDeleteSuggesterQueryParams withAction(PostDeleteSuggesterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSuggesterVersionEnum version;
    public PostDeleteSuggesterQueryParams withVersion(PostDeleteSuggesterVersionEnum version) {
        this.version = version;
        return this;
    }
}