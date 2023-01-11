package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMediaAssetsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetMediaAssetsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}