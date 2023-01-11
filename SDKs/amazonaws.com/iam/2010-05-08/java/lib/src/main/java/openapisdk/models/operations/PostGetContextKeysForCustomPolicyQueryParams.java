package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetContextKeysForCustomPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetContextKeysForCustomPolicyActionEnum action;
    public PostGetContextKeysForCustomPolicyQueryParams withAction(PostGetContextKeysForCustomPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetContextKeysForCustomPolicyVersionEnum version;
    public PostGetContextKeysForCustomPolicyQueryParams withVersion(PostGetContextKeysForCustomPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}