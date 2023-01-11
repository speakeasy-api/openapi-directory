package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccessPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteAccessPolicyQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}