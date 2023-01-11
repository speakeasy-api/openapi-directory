package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityDkimAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetIdentityDkimAttributesActionEnum action;
    public PostGetIdentityDkimAttributesQueryParams withAction(PostGetIdentityDkimAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetIdentityDkimAttributesVersionEnum version;
    public PostGetIdentityDkimAttributesQueryParams withVersion(PostGetIdentityDkimAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}