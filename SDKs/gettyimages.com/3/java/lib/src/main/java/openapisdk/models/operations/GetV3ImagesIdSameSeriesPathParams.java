package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3ImagesIdSameSeriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetV3ImagesIdSameSeriesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}