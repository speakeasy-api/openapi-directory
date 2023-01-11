package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePortalQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeletePortalQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}