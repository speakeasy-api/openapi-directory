package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDomainActionEnum action;
    public PostCreateDomainQueryParams withAction(PostCreateDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDomainVersionEnum version;
    public PostCreateDomainQueryParams withVersion(PostCreateDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}