package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteServiceSpecificCredentialActionEnum action;
    public PostDeleteServiceSpecificCredentialQueryParams withAction(PostDeleteServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteServiceSpecificCredentialVersionEnum version;
    public PostDeleteServiceSpecificCredentialQueryParams withVersion(PostDeleteServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}