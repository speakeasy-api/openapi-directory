package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssetModelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteAssetModelQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}