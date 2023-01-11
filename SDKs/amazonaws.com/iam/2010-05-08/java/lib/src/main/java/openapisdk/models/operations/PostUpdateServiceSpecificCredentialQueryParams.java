package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateServiceSpecificCredentialActionEnum action;
    public PostUpdateServiceSpecificCredentialQueryParams withAction(PostUpdateServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateServiceSpecificCredentialVersionEnum version;
    public PostUpdateServiceSpecificCredentialQueryParams withVersion(PostUpdateServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}