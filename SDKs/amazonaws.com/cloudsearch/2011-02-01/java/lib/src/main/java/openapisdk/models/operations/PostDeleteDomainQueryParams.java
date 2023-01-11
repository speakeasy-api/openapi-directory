package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDomainActionEnum action;
    public PostDeleteDomainQueryParams withAction(PostDeleteDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDomainVersionEnum version;
    public PostDeleteDomainQueryParams withVersion(PostDeleteDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}