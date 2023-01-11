package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3VideosIdSameSeriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetV3VideosIdSameSeriesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}