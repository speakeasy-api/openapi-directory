package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public ProductsAllPathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
}