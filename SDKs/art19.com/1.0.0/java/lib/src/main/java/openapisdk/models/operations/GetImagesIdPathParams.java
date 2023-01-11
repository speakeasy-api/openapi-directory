package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetImagesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}