package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetServiceSpecificCredentialActionEnum action;
    public PostResetServiceSpecificCredentialQueryParams withAction(PostResetServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetServiceSpecificCredentialVersionEnum version;
    public PostResetServiceSpecificCredentialQueryParams withVersion(PostResetServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}