package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSeriesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSeriesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}