package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3EventsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetV3EventsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}