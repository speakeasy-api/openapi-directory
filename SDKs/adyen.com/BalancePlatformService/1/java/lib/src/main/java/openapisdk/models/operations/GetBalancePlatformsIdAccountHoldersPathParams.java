package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBalancePlatformsIdAccountHoldersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBalancePlatformsIdAccountHoldersPathParams withId(String id) {
        this.id = id;
        return this;
    }
}