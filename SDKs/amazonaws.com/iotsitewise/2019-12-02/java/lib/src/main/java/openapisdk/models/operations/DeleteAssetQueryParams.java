package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteAssetQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}