package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetClusterCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetClusterCredentialsActionEnum action;
    public PostGetClusterCredentialsQueryParams withAction(PostGetClusterCredentialsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetClusterCredentialsVersionEnum version;
    public PostGetClusterCredentialsQueryParams withVersion(PostGetClusterCredentialsVersionEnum version) {
        this.version = version;
        return this;
    }
}