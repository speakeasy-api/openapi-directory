package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBalancePlatformsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBalancePlatformsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}