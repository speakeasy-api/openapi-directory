package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostChargePathParams withId(String id) {
        this.id = id;
        return this;
    }
}