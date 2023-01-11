package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineSuggesterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDefineSuggesterActionEnum action;
    public PostDefineSuggesterQueryParams withAction(PostDefineSuggesterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDefineSuggesterVersionEnum version;
    public PostDefineSuggesterQueryParams withVersion(PostDefineSuggesterVersionEnum version) {
        this.version = version;
        return this;
    }
}