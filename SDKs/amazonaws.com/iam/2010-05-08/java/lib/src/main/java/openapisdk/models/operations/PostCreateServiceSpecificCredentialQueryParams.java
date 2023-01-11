package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateServiceSpecificCredentialActionEnum action;
    public PostCreateServiceSpecificCredentialQueryParams withAction(PostCreateServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateServiceSpecificCredentialVersionEnum version;
    public PostCreateServiceSpecificCredentialQueryParams withVersion(PostCreateServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}