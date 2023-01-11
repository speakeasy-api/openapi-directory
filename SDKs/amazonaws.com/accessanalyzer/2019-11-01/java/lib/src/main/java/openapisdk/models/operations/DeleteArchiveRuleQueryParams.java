package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArchiveRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteArchiveRuleQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}