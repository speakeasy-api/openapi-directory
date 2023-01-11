package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMessageCommentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteMessageCommentsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}