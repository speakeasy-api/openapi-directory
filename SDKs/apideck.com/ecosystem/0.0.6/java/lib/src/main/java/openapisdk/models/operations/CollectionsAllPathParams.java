package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public CollectionsAllPathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
}