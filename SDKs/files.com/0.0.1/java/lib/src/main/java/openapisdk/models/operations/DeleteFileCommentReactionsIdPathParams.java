package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFileCommentReactionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteFileCommentReactionsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}