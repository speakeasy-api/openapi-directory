package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListDomainNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListDomainNamesActionEnum action;
    public PostListDomainNamesQueryParams withAction(PostListDomainNamesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListDomainNamesVersionEnum version;
    public PostListDomainNamesQueryParams withVersion(PostListDomainNamesVersionEnum version) {
        this.version = version;
        return this;
    }
}