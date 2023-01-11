package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAttachedPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target")
    public String target;
    public ListAttachedPoliciesPathParams withTarget(String target) {
        this.target = target;
        return this;
    }
}