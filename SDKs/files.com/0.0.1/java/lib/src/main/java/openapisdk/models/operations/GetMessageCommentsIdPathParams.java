package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessageCommentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetMessageCommentsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}