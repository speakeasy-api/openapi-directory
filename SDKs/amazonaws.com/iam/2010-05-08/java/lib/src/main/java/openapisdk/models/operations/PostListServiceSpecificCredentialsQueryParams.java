package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListServiceSpecificCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListServiceSpecificCredentialsActionEnum action;
    public PostListServiceSpecificCredentialsQueryParams withAction(PostListServiceSpecificCredentialsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListServiceSpecificCredentialsVersionEnum version;
    public PostListServiceSpecificCredentialsQueryParams withVersion(PostListServiceSpecificCredentialsVersionEnum version) {
        this.version = version;
        return this;
    }
}