package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyDomainDkimQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostVerifyDomainDkimActionEnum action;
    public PostVerifyDomainDkimQueryParams withAction(PostVerifyDomainDkimActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostVerifyDomainDkimVersionEnum version;
    public PostVerifyDomainDkimQueryParams withVersion(PostVerifyDomainDkimVersionEnum version) {
        this.version = version;
        return this;
    }
}