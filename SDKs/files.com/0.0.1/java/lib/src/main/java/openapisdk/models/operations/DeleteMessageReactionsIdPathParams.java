package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMessageReactionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteMessageReactionsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}