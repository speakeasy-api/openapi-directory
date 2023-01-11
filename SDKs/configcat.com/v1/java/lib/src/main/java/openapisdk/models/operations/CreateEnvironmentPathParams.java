package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public CreateEnvironmentPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}