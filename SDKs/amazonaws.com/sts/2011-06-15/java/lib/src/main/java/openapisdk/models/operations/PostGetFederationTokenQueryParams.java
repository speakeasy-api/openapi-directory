package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetFederationTokenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetFederationTokenActionEnum action;
    public PostGetFederationTokenQueryParams withAction(PostGetFederationTokenActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetFederationTokenVersionEnum version;
    public PostGetFederationTokenQueryParams withVersion(PostGetFederationTokenVersionEnum version) {
        this.version = version;
        return this;
    }
}