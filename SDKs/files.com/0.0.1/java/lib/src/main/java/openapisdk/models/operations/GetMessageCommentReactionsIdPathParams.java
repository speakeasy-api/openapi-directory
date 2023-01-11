package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessageCommentReactionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetMessageCommentReactionsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}