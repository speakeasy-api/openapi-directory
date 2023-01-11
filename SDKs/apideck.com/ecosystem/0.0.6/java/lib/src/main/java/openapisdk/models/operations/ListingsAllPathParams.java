package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListingsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public ListingsAllPathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
}