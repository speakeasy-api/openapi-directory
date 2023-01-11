package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetContextKeysForPrincipalPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetContextKeysForPrincipalPolicyActionEnum action;
    public PostGetContextKeysForPrincipalPolicyQueryParams withAction(PostGetContextKeysForPrincipalPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetContextKeysForPrincipalPolicyVersionEnum version;
    public PostGetContextKeysForPrincipalPolicyQueryParams withVersion(PostGetContextKeysForPrincipalPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}