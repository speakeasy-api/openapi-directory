package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListConfigurationSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListConfigurationSetsActionEnum action;
    public PostListConfigurationSetsQueryParams withAction(PostListConfigurationSetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListConfigurationSetsVersionEnum version;
    public PostListConfigurationSetsQueryParams withVersion(PostListConfigurationSetsVersionEnum version) {
        this.version = version;
        return this;
    }
}