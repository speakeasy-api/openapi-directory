package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExternalEventsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetExternalEventsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}